# Lianzon Auto V9 — Global Website

## Package contents
- Six language versions: English, Simplified Chinese, Russian, Arabic, Spanish and French.
- 17 localized static pages per language (102 localized pages total).
- Whole-vehicle export and automotive-parts wholesale procurement are presented as two business lines.
- Dedicated Kazakhstan market guide and international market hub.
- Nine-category automotive-parts catalog, with six user-provided product photos and two reserved image positions.
- Contact profile, Google Maps centered on Nansha District (no street address), WhatsApp, a single Telegram CTA on each Contact page, email and WeChat.
- Shared FormBoost enquiry endpoint: `https://formboost.app/f/mnadoc5l`.

## Company and contact details
- Legal/company name: 广州联纵贸易有限公司 | Guangzhou Lianzong Trading Co., Ltd.
- Address supplied: Guangzhou, Guangdong, China (city-level only; no street address was supplied).
- Email: info@lianzonauto.com
- WhatsApp: +44 7599 167833
- Telegram: https://t.me/lianzon_auto
- WeChat: Lianzonauto
- Office hours: Monday–Saturday, 9:00–18:00, Beijing Time (GMT+8)

## Upload
1. Back up the live website.
2. Extract this ZIP.
3. Upload all files and folders inside the archive directly into the website document root (for example, `public_html`).
4. Do not add an extra outer folder layer.
5. Test `/`, all six language homepages, the vehicle and parts hubs, contact form, Google Maps embed and contact links.
6. Run one controlled FormBoost test submission and confirm that it is received.
7. Submit `https://lianzonauto.com/sitemap.xml` in Google Search Console.

## Important QA notes
- Static code/content checks are documented in `QA_REPORT.txt`.
- Full browser visual regression and real-device touch testing were not completed in this package build. Check the deployed pages in desktop and mobile browsers before promoting the site.
- The Contact-page map is centered on Nansha District, Guangzhou, as an approximate district-level marker only; no street address or exact office pin is published.
- Two product image positions are reserved for later uploads (leaf springs/suspension upgrades and spark plugs).
- Product compatibility, availability, export eligibility, customs requirements and import rules must be confirmed for each order.
- SEO metadata and sitemap structure do not guarantee Google indexing, rankings or enquiries.

## Technical files
- `styles.css`: global and responsive styles.
- `script.js`: language dictionaries and client-side UI behavior.
- `config.js`: shared WhatsApp, email, Telegram, Facebook and WeChat contact settings.
- `sitemap.xml`: 102 localized page URLs.
- `robots.txt`: crawler rules and sitemap location.
- `SEO_KEYWORD_MAP.txt`: page/content targeting notes.
- `V5_ASSET_MANIFEST.txt`: original V5 asset manifest.

## V9.1 correction (2026-11-21)
- Google Maps center moved from Guangzhou city center to Nansha District, Guangzhou. The company address remains at city/province level and no street number is displayed.
- Contact pages now show one primary Telegram CTA; redundant secondary/floating Telegram links were removed from Contact pages only. The standard quick-contact Telegram links on other pages remain.
