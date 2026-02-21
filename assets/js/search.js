/**
 * Pagefind search: modal toggle + /search?q= URL support
 *
 * Flow:
 * - Header search icon opens modal; Pagefind loads on first open.
 * - Visiting /search or /search?q=<term> auto-opens modal; ?q= runs triggerSearch.
 * - triggerSearch is called only in script onload callback to avoid race.
 *
 * @see docs/20260218_SearchPageWithURLParams/
 */
var hideButton;
var wrapper;
var modal;
var searchVisible = false;
var pagefindInstance = null;

/**
 * Load Pagefind UI; if initialTerm provided, run search after init.
 * No race: triggerSearch runs only inside script onload.
 */
function loadPagefindUI(initialTerm) {
  if (pagefindInstance) {
    if (initialTerm) pagefindInstance.triggerSearch(initialTerm);
    return;
  }

  var script = document.createElement("script");
  script.src = "/pagefind/pagefind-ui.js";
  script.onload = function () {
    pagefindInstance = new PagefindUI({
      element: "#search",
      showSubResults: true,
      sort: { date: "desc" },
    });
    if (initialTerm) pagefindInstance.triggerSearch(initialTerm);
  };
  document.head.appendChild(script);
}

/**
 * Open search modal. Pass initialTerm to pre-run search (e.g. from ?q=).
 */
function displaySearch(initialTerm) {
  wrapper = document.getElementById("search-wrapper");
  modal = document.getElementById("search-modal");
  hideButton = document.getElementById("close-search-button");

  if (!wrapper || !modal) return;

  loadPagefindUI(initialTerm);

  wrapper.classList.remove("invisible");
  wrapper.setAttribute("aria-hidden", "false");
  searchVisible = true;

  if (hideButton && !hideButton.dataset.searchBound) {
    hideButton.addEventListener("click", hideSearch);
    hideButton.dataset.searchBound = "1";
  }
  if (wrapper && !wrapper.dataset.searchBound) {
    wrapper.addEventListener("click", hideSearch);
    wrapper.dataset.searchBound = "1";
  }
  if (modal && !modal.dataset.searchBound) {
    modal.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    modal.dataset.searchBound = "1";
  }
}

function hideSearch() {
  wrapper = document.getElementById("search-wrapper");
  if (!wrapper) return;
  wrapper.classList.add("invisible");
  wrapper.setAttribute("aria-hidden", "true");
  searchVisible = false;
}

function initSearch() {
  var showButton = document.getElementById("search-button");
  var showButtonMobile = document.getElementById("search-button-mobile");

  if (showButton) showButton.addEventListener("click", function () { displaySearch(); });
  if (showButtonMobile) showButtonMobile.addEventListener("click", function () { displaySearch(); });

  document.addEventListener("keydown", function (event) {
    if (event.key === "/" && !searchVisible) {
      var active = document.activeElement;
      var tag = active && active.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && (!active || !active.isContentEditable)) {
        event.preventDefault();
        displaySearch();
      }
    }
    if (event.key === "Escape") hideSearch();
  });

  // /search page: auto-open modal; ?q= runs search (URLSearchParams decodes CJK)
  var pathname = window.location.pathname.replace(/\/$/, "") || "/";
  if (pathname === "/search") {
    var params = new URLSearchParams(window.location.search);
    var term = params.get("q");
    displaySearch(term || undefined);
  }
}

// Run after DOM ready; defer already ensures script runs post-parse.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSearch);
} else {
  initSearch();
}
