# Connectome Blog — Hugo + Blowfish

Static site for connectome.tw. Migrated from Drupal; content extracted from `wayback_connectome/`.

## Setup

1. **Install Hugo** (≥0.141.0). See `SETUP.md`.
2. **Submodule:** `git submodule update --init themes/blowfish`

## Local dev

```bash
hugo serve
```

Open http://localhost:1313/

## Build

```bash
hugo
```

Output: `public/`

## Search (Pagefind)

Run after Hugo build:

```bash
npx pagefind --site public
```

Then the search button in the header will work.

## Contributing

Open a PR → after merge to `main`, the site is built and published to **https://connectome.tw**. See [CONTRIBUTING.md](CONTRIBUTING.md).
