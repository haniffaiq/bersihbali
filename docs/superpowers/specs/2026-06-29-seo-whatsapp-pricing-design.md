# BersihBali SEO, WhatsApp, And Pricing Design

## Goal

Improve BersihBali's local SEO and WhatsApp lead conversion while keeping the current Vite/React architecture and multiplying every displayed service price by 5.

## Scope

- Keep testimonial content as placeholder.
- Keep the current single-page app as the main experience.
- Add lightweight static keyword landing pages under `public/seo/`.
- Add `robots.txt` and `sitemap.xml`.
- Fix inconsistent business data in metadata, schema, footer, and WhatsApp links.
- Update all current price ranges and pricing table rows to 5x their existing values.

## Approach

Use the current `index.html` for homepage SEO metadata and JSON-LD. Use static HTML files for long-tail SEO pages because Vite will copy `public/` directly into the deployed site with no routing migration. Each SEO page will include canonical metadata, LocalBusiness/Service schema, visible service content, pricing context, and WhatsApp CTAs to the same official number.

## Acceptance Criteria

- Homepage has canonical URL, correct favicon path, complete Open Graph/Twitter metadata, and valid LocalBusiness schema.
- `robots.txt` points to the sitemap.
- `sitemap.xml` includes the homepage and all static SEO pages.
- Footer, schema, and WhatsApp links use `6281805456569`.
- All visible prices and prefilled WhatsApp messages are 5x the previous amounts.
- Testimonial placeholders are unchanged.
