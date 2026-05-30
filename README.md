# integraw.in — Astro Website

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev        # → http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project structure

```
integraw/
├── astro.config.mjs          # Astro + integrations config
├── tailwind.config.mjs       # Brand colors, fonts
├── src/
│   ├── content/
│   │   ├── config.ts         # Content collection schemas
│   │   ├── blog/             # .mdx blog posts
│   │   └── portfolio/        # .mdx portfolio projects
│   ├── layouts/
│   │   └── Base.astro        # Nav, footer, SEO head
│   └── pages/
│       ├── index.astro       # Homepage
│       ├── blog/
│       │   ├── index.astro   # Blog listing
│       │   └── [slug].astro  # Individual post
│       ├── portfolio.astro   # Portfolio grid
│       ├── portfolio/
│       │   └── [slug].astro  # Project detail
│       └── contact.astro     # Contact form
└── public/
    └── favicon.svg           # Your logo SVG
```

## Adding a blog post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your post title"
description: "A short description for SEO and previews"
pubDate: 2025-06-01
author: "Your Name"
tags: ["PrestaShop", "SEO"]
---

Your content here in Markdown...
```

## Adding a portfolio project

Create a new `.mdx` file in `src/content/portfolio/`:

```mdx
---
title: "Project Name"
description: "Brief project description"
client: "Client Name"
tech: ["PrestaShop", "Custom Theme", "Razorpay"]
url: "https://clientsite.com"   # optional
featured: true                  # shows on homepage
order: 1                        # sort order
---

## The challenge
...
```

## Deployment (Cloudflare Pages — recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Set custom domain: `integraw.in`

## Contact form setup

Replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your [Formspree](https://formspree.io) form ID.
Free plan handles 50 submissions/month.

## SEO checklist before launch

- [ ] Replace `og-default.png` in `/public` with a real Open Graph image (1200×630px)
- [ ] Replace `favicon.svg` with your integraw logo SVG
- [ ] Update phone number and email in `Base.astro` footer and `contact.astro`
- [ ] Update `site` in `astro.config.mjs` (already set to `https://integraw.in`)
- [ ] Add Google Search Console verification meta tag
- [ ] Submit `https://integraw.in/sitemap-index.xml` to Google Search Console
