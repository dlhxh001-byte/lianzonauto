# Lianzon Auto V8 — Global Brand + Market-Specific SEO

## Positioning
- Global brand: China-based whole-vehicle export and automotive-parts wholesale procurement for international customers.
- Two equal business lines: whole-vehicle export and automotive-parts wholesale procurement.
- Both business lines are presented as core services, without a primary/secondary hierarchy.
- Kazakhstan: one focus market with its own detailed landing page, not the exclusive destination.
- International markets: Central Asia, Latin America, Africa, Europe and the Middle East. Product eligibility, import requirements and international delivery arrangements are checked case by case.

## What changed in V8
- Restored the global homepage positioning and six original vehicle category images from the user's V5 project.
- Preserved all eight V5 image assets byte-for-byte, including favicon.
- Added a multilingual Markets hub at `/[lang]/markets.html`.
- Changed the global navigation label from `Kazakhstan` to `Markets`; the Kazakhstan guide remains one click inside that hub.
- Rebuilt the five language homepages to display original category imagery, two distinct business lines, global destination messaging, model guides, process and contact entry points.
- Retained the existing Kazakhstan destination guide, six model guides, four parts category guides, services, contact pages, floating contact rail and mobile contact bar.
- Added five Markets URLs to the XML sitemap and page-level canonical/hreflang/OG/Twitter/JSON-LD metadata.

## Languages
English, Simplified Chinese, Russian, Arabic (RTL) and Spanish. Each language has its own static HTML pages. The root `index.html` detects the browser language and falls back to English.

## Upload
1. Back up the live website.
2. Extract this ZIP.
3. Upload all files and folders inside the ZIP directly to the website document root (e.g. `public_html`).
4. Do not add an extra outer folder layer.
5. Test `/`, each language homepage, `/[lang]/markets.html`, `/[lang]/kazakhstan.html`, the vehicle and parts pages, and contact actions.
6. Submit `https://lianzonauto.com/sitemap.xml` in Google Search Console after deployment.

## Before launch
- Confirm the actual Facebook and Instagram account URLs in `config.js`.
- Verify WhatsApp/email destinations.
- Confirm live server HTTPS, HTTP status, MIME types, canonical URLs and sitemap reachability.
- Native-language proofreading and market-specific customs checks are recommended before paid campaigns.

## SEO caveat
Technical metadata and content structure help search engines understand the site but do not guarantee indexing, ranking, traffic or enquiries. Actual performance must be measured after live deployment in Google Search Console and analytics.


## Original V5 assets and QA
- The original V5 CSS file is retained byte-for-byte at the start of `styles.css`; V8 additions are appended.
- All eight original V5 image assets are preserved byte-for-byte under `assets/` and reused in the five localized homepages.
- See `V5_ASSET_MANIFEST.txt` for file sizes and SHA-256 hashes.
- See `QA_REPORT.txt` for the exact static tests performed and the browser/live-deployment checks that remain.


## 2026-11-11 update
- Public positioning now presents the Kazakhstan Market Department and International Trade Department.
- Whole-vehicle export and automotive-parts wholesale procurement are presented as two equal business lines.
- International market coverage explicitly names Central Asia, Latin America, Africa, Europe and the Middle East.
- Delivery wording refers to international logistics and destination delivery agreed for each order; it does not promote domestic China handover as the delivery endpoint.
- The five localized Contact forms share the Formboost endpoint `https://formboost.app/f/mnadoc5l`.
