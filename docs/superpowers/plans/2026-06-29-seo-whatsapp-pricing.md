# SEO WhatsApp Pricing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve local SEO and WhatsApp conversion while multiplying all listed prices by 5.

**Architecture:** Keep the Vite React app as the homepage and add crawlable static SEO pages in `public/seo/`. Use static `robots.txt` and `sitemap.xml` because the site deploys as static assets.

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, static HTML.

---

### Task 1: Homepage SEO Metadata

**Files:**
- Modify: `index.html`

- [ ] Add canonical URL, real favicon path, complete OG/Twitter tags, and valid LocalBusiness JSON-LD using the official WhatsApp number.

### Task 2: App Pricing And Contact Data

**Files:**
- Modify: `src/App.tsx`

- [ ] Multiply every current price by 5 in service cards, pricing rows, and WhatsApp prefilled messages.
- [ ] Update footer phone text to match `6281805456569`.
- [ ] Keep testimonial placeholder data unchanged.

### Task 3: Static SEO Pages

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/site.webmanifest`
- Create: `public/favicon.svg`
- Create: `public/og-bersihbali.svg`
- Create: `public/seo/deep-cleaning-villa-bali.html`
- Create: `public/seo/jasa-cleaning-canggu.html`
- Create: `public/seo/villa-cleaning-seminyak.html`
- Create: `public/seo/home-cleaning-ubud.html`
- Create: `public/seo/cuci-sofa-bali.html`
- Create: `public/seo/poles-lantai-bali.html`

- [ ] Add crawlable service landing pages with unique title, description, canonical, service schema, prices, and WhatsApp CTA.
- [ ] Include all static pages in `sitemap.xml`.

### Task 4: Verification

**Files:**
- Check: `index.html`
- Check: `src/App.tsx`
- Check: `public/sitemap.xml`

- [ ] Run `npm run typecheck`, `npm run lint`, and `npm run build` after dependencies are available.
- [ ] Verify no old price strings remain in source.
- [ ] Verify sitemap includes every new SEO page.
