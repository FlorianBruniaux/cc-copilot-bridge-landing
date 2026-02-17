# cc-copilot-bridge-landing

Landing page for [cc-copilot-bridge](https://github.com/FlorianBruniaux/cc-copilot-bridge).

## Live Site

https://ccbridge.bruniaux.com/

## Tech Stack

- Vanilla HTML/CSS/JS (no build step)
- GitHub Pages deployment via Actions
- MiniSearch for client-side search (lazy-loaded from CDN)

## Structure

```
├── index.html          # Main landing page
├── styles.css          # Complete stylesheet
├── search.js           # Cmd+K search functionality
├── search-data.js      # Search index
├── favicon.svg         # Site icon
├── robots.txt          # SEO
├── assets/             # Screenshots from main repo
└── .github/workflows/
    └── static.yml      # GitHub Pages deployment
```

## Development

No build step required. Just serve the files:

```bash
# Using Python
python -m http.server 8000

# Using npx
npx serve .
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/static.yml`.

## Related

- [cc-copilot-bridge](https://github.com/FlorianBruniaux/cc-copilot-bridge) - Main project
- [Claude Code Ultimate Guide](https://cc.bruniaux.com/) - Complete Claude Code documentation

## License

MIT
