# Sofie Olsen portfolio

My portfolio site, built with Next.js and exported as a static site so it can be hosted for free on GitHub Pages. The page is rendered to plain HTML at build time, which means search engines and AI assistants can read all of the content.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

```
app/                 Page, layout (fonts and SEO metadata), global styles and design tokens
components/ui/       Small building blocks: Button, Tag, SectionLabel, TextLink
components/cards/    ProjectCard and Tile
components/layout/   Header and Footer
components/sections/ One component per page section (Hero, Projects, About, Skills, ...)
data/content.js      All text, projects, skills and links
public/images/       Photos
```

- **Change text, projects or links:** edit `data/content.js`.
- **Change colours, font sizes or spacing:** edit the variables at the top of `app/globals.css`.
- **Add a project image:** put the file in `public/images/` and add `image: "/images/your-file.jpg"` to the project in `data/content.js`.
- **CV:** put your CV in `public/cv.pdf`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repository, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds the site and publishes it. The workflow is in `.github/workflows/deploy.yml`.

If the repository is called `<your-username>.github.io`, the site is served at `https://<your-username>.github.io`. Any other name serves it at `https://<your-username>.github.io/<repo-name>`; the workflow sets the right base path automatically.
