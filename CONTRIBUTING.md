# Contributing

We welcome edits and new content. The site is built and published automatically when changes are merged to `main`.

## How to contribute

1. **Fork** this repo (or create a branch if you have write access).
2. **Edit** content under `content/` (posts, connectbar, events, etc.) or config under `config/`.
3. **Commit** and push to your branch.
4. **Open a Pull Request** against `main`.
5. After review and **merge**, GitHub Actions builds the site and deploys to [connectome.tw](https://connectome.tw). The updated site is usually live within a couple of minutes.

## Local preview

To preview changes before opening a PR:

```bash
git submodule update --init themes/blowfish
hugo serve
```

Open http://localhost:1313/

## Content structure

- **Posts:** `content/posts/<slug>/index.md`
- **Connectbar:** `content/connectbar/<slug>/index.md`
- **Events:** `content/events/<slug>/index.md`

Use existing items as templates for front matter and formatting.
