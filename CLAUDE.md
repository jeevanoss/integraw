# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Production build (outputs to dist/)
npm run preview  # Serve the production build locally
```

There is no lint or test command — Astro's build step (`npm run build`) catches type errors and broken imports.

## Architecture

This is an Astro 4 static site with Tailwind CSS, MDX content, and React for interactive islands. It's the marketing/portfolio website for Integraw, an e-commerce dev agency.

**Content layer** — `src/content/` holds two Zod-validated collections:
- `blog/` — MDX posts with `title`, `description`, `pubDate`, `author`, `tags`, `image?`, `draft`
- `portfolio/` — MDX project write-ups with `title`, `description`, `client`, `tech[]`, `url?`, `image?`, `featured`, `order`

`src/content/config.ts` is the single source of truth for these schemas. Adding a field there is the only place it needs to be defined — Astro infers TypeScript types automatically.

**Routing** — file-based under `src/pages/`. Dynamic routes `blog/[slug].astro` and `portfolio/[slug].astro` use `getStaticPaths()` + `getCollection()` to generate one page per MDX file at build time.

**Layout** — all pages wrap in `src/layouts/Base.astro`, which owns the `<head>` (SEO tags, Open Graph, Twitter cards, fonts), sticky nav, and footer. Per-page SEO is passed as props: `title`, `description?`, `image?`.

**Styling** — Tailwind with a custom `brand` color scale (blues: 50–900) and `teal` accents (400/600/800). Fonts are `DM Sans` (sans) and `JetBrains Mono` (mono), loaded from Google Fonts in `Base.astro`. Brand colors and font families are defined in `tailwind.config.mjs`.

**React** — `@astrojs/react` is installed for interactive islands but no React components exist yet. Astro components handle all current UI.

**Contact form** — `src/pages/contact.astro` posts to Formspree. The form ID placeholder is `YOUR_FORM_ID`.

## Integrations (astro.config.mjs)

| Integration | Purpose |
|---|---|
| `@astrojs/tailwind` | Tailwind CSS |
| `@astrojs/mdx` | MDX content |
| `@astrojs/sitemap` | Auto-generates `/sitemap-index.xml` |
| `@astrojs/react` | React island support |

`site` is set to `https://integraw.in` — required for sitemap and canonical URL generation.

## Adding content

**Blog post** — create `src/content/blog/<slug>.mdx`. Set `draft: true` to hide from listings without deleting the file.

**Portfolio project** — create `src/content/portfolio/<slug>.mdx`. Set `featured: true` to show on the homepage teaser section. `order` controls sort order on the portfolio grid.

Images for posts/projects: add to `public/` and reference as `/filename.ext` in the MDX frontmatter `image` field.
