# Hugo Setup for connectome-blog

Per [gohugo.io/installation/macos](https://gohugo.io/installation/macos). Requires Hugo ≥0.141.0 (Blowfish, Pagefind).

---

## Option 1: Homebrew (recommended)

```bash
brew install hugo
```

Installs the extended/deploy edition. If you see permission errors (`/opt/homebrew is not writable`), fix Homebrew ownership:

```bash
sudo chown -R $(whoami) /opt/homebrew
```

Then retry `brew install hugo`.

---

## Option 2: Prebuilt binary (no Homebrew)

1. Visit [github.com/gohugoio/hugo/releases/latest](https://github.com/gohugoio/hugo/releases/latest)
2. Download `hugo_extended_*_macOS-arm64.tar.gz` (Apple Silicon) or `hugo_extended_*_macOS-64bit.tar.gz` (Intel)
3. Extract and move to PATH:

   ```bash
   tar -xzf hugo_extended_*.tar.gz
   sudo mv hugo /usr/local/bin/   # or ~/bin if you have it in PATH
   ```

4. Verify: `hugo version`

---

## Option 3: MacPorts

```bash
sudo port install hugo
```

---

## Option 4: Build from source (Go required)

```bash
go install github.com/gohugoio/hugo@latest                    # standard
CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest  # extended
```

Binary lands in `$HOME/go/bin` (add to PATH if needed).

---

## Verify

```bash
hugo version
```

Expect `hugo v0.141+` or newer.
