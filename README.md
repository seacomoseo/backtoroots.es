# backtoroots.es

[![backtoroots.es](/assets/media/logo.png)](https://backtoroots.es/)


## STEPS


### Local

- Design
  - You can edit any file with the same structure of theme sansoul
  - GENERAL
    - `config.yml`
    - `data/*.{yml,md}`
  - IMG + LOGO + FAVICON
    - `assets/media/` folder ⏩ [Compress image tool](https://compressor.io/)
      - `fondo.jpg`
      - `logo.svg`
      - `logo.png`
      - `icon.png`
      - `favicon.ico` ⏩ [Favicon converter tool](https://favicon.io/favicon-converter/)
    - Gitlab, Github, Netlify and Cloudflare Pages update icon (project and account)
  - FONTS
    - Fonts that not be in Google Fonts:
      - .otf/.ttf files in `assets/fonts` + rename
      - You need the `sansoul_tools` project in `../_tools` folder
      - Run `do fonts` comand
      - `Family` + `Style` + `Weight` must match in `config.yml ⏩ params.fonts` + `_fonts.scss` (and disable `params.fonts.google` if appropriate)
  - CONTENT
    - `content/*`
      - `blog/divisores.md` ⏩ remove
      - `admin` ⏩ `draft: true` and/or change params and content
      - SCRAP
        - Copy [this Spreadsheet Layout](https://docs.google.com/spreadsheets/d/1bXK2OW_SYJK3u3SUO8KRoXUXr9kj42yehXw2O0UapEY/)
        - First scrap with Screaming Frog and paste `url` and `title`
        - Second scrap with `IMPORTXML` formula in `content-start` tab
        - If need HTML content
          - Three scrap with `Web Scraper` chrome extension and paste in `content-scrap` tab
          - Copy `content-start` tab into `content-next` and get `body_code` (by `content-scrap`) with `VLOOKUP` formula
          - Copy `body_code` column to `body`, [convert to Markdown](https://codebeautify.org/html-to-markdown) and clean it
        - Copy `content-next` to `content-export` without `url` and `body_code`
        - Export to CSV ⏩ [convert to YM](https://onlineyamltools.com/convert-csv-to-yaml) ⏩ paste in `./Downloads/DIR/pages.yml` and clean it + write `___` to split files
        - Execute `../_tools/yml-split.command`
        - Paste Markdown files in `blog`
  - HTML
    - `layouts/*`
    - `data/config.yml ⏩ custom_code.html_head.code`
    - `data/config.yml ⏩ custom_code.html_body.code`
  - CSS
    - `assets/css/*`
    - `assets/css/` ⏩ `_variables-custom.scss` + `_custom.scss`
    - `data/config.yml ⏩ custom_code.css.code`
  - JS
    - `assets/js/*`
    - `layouts/partials/sections/common/scripts.html`
    - `data/config.yml ⏩ custom_code.js.code`
  - IMG
    - `assets/media/*`
  - REDIRECTS
    - `assets/redirects.md`
  - ROBOTS
    - `assets/robots.md`
  - If Multilanguaje and Multihosting, add `cp ./public/[es|en]/404.html ./public/` in `netlify.toml ⏩ build.command`
  - Try in Safari and Firefox
  - Check in [W3 Validator](https://validator.w3.org/)
  - Check in [PageSpeed Insights](https://pagespeed.web.dev/)


### After client validate web


#### Domain

- If Netlify
  - [`Domain Management / settings`](https://app.netlify.com/sites/danafrimar/settings/domain)
  - `Add custom domain`
  - `Check DNS configuration` Copy
  - Add `DNS Records` copied from Netlify to Domain gestor:
    - From: `backtoroots.es`
      DNS Record: `ALIAS`, `ANAME` or `flattened CNAME`
      To: `apex-loadbalancer.netlify.com`
    - From: `backtoroots.es`
      DNS Record: `A`
      To: `75.2.60.5`
    - From: `www`
      DNS Record: `CNAME`
      To: `danafrimar.netlify.app.`
    - Maybe you need to eliminate the previous records with similar names
  - `Verify DNS configuration`
  - If it does not work after a while, try `Set as main domain` in the `www` version and also in te `nowww` version


#### Forms

- If Netlify Form
  - Don't need configure nothing! Build like you want in local or with CMS
  - [`Netlify ⏩ Site ⏩ Forms ⏩ Form Notifications`](https://app.netlify.com/sites/danafrimar/settings/forms#form-notifications) ⏩ `Add notification ⏩ Email notification ⏩ Email to Notify`
    - `Email to notify` = Emails of collaborators that want receive submissions
    - `Custom email subject line` = `Formulario de contacto de backtoroots.es`
    - `Save`
  - Submissions: [`Netlify site ⏩ Forms`](https://app.netlify.com/sites/danafrimar/forms)


#### [Google Search Console](https://search.google.com/search-console)

- Add property
- Verify versions ⏩ `data/config.yml`
  - `google_analytics`
  - `google_site_verification`
  - `google_file_verification`
  - DNS:
    From: `@`
    DNS Record: `TXT`
    To: `google-site-verification=[google_site_verification]`
- Link with Analytics
- Add sitemap.xml


#### [Google My Business](https://business.google.com/)

- `Add company ⏩ ...` ⏩ whait 13 days to receive postal and insert code to verify


##### Delivery

Send to all collaborators next:

```
*ENTREGA WEB backtoroots.es:* https://seacomoseo.com/entrega/
```
