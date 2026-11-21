# Jinrong Fu · Academic homepage

Next.js static site for GitHub Pages. Use Node 22 or newer.

## Preview

Run `npm ci` and `npm run dev`, then open http://localhost:3000.
For a production preview, run `npm run build` and serve the generated
`out/` directory with `python3 -m http.server 8000 --directory out`.

## Edit the site

- Profile, contacts and navigation: content/config.toml
- Homepage section order: content/about.toml
- Introduction and current work: content/bio.md and content/research-overview.md
- Research page: content/research.md
- Paper list and homepage selections: content/publications.bib
- Dated updates: content/news.toml
- Committee roles and CV: content/leadership.toml and content/cv.md
- Profile photograph: public/portrait.webp

The December 2026 election announcement is included in this edition. Publish
it after the election if the site will otherwise go live before the event.

## Publish

Copy the repository contents (including .github/) into the GitHub Pages
repository. In Settings → Pages, choose GitHub Actions. Run the deployment
workflow manually from Actions. The supplied workflow does not deploy on push.
