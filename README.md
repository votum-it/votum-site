# VOTUM Website

Production-ready React + Vite homepage for VOTUM — an IT consulting & software development company.

## Stack

- **React 18** — component framework
- **Vite 5** — build tool & dev server
- **Pure CSS** — component-scoped stylesheets with CSS custom properties (no CSS-in-JS, no Tailwind)
- **Vercel** — recommended hosting

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build → /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## Project structure

```
votum-website/
├── index.html                  ← Entry HTML (Google Fonts loaded here)
├── vite.config.js
├── src/
│   ├── main.jsx                ← React entry point
│   ├── App.jsx                 ← Root component (assembles all sections)
│   ├── styles/
│   │   ├── tokens.css          ← CSS design tokens (single source of truth)
│   │   └── global.css          ← Reset + shared utilities (.btn, .tag, .reveal…)
│   ├── hooks/
│   │   └── useReveal.js        ← IntersectionObserver scroll-reveal hook
│   └── components/
│       ├── Nav.jsx / Nav.css
│       ├── Hero.jsx / Hero.css
│       ├── Stats.jsx / Stats.css
│       ├── Services.jsx / Services.css
│       ├── HowWeWork.jsx / HowWeWork.css
│       ├── Cases.jsx / Cases.css
│       ├── CtaBanner.jsx / CtaBanner.css
│       └── Footer.jsx / Footer.css
```

---

## Swapping in the real logo

1. Export your logo as `/public/logo.svg` (or any format).
2. Open `src/components/Nav.jsx` and replace the `<LogoPlaceholder />` element with:
   ```jsx
   <img src="/logo.svg" alt="VOTUM" height="36" />
   ```
3. Do the same in `src/components/Footer.jsx` — locate the inline `LogoPlaceholder` function and replace its return value similarly.

---

## Adding the Alte Haas Grotesk font

The headings use `var(--font-display)`. The fallback is `system-ui`. To activate Alte Haas Grotesk:

1. Download the font files (e.g. from [Open Foundry](https://open-foundry.com/) or the designer's page).
2. Place `.woff2` files in `/public/fonts/`.
3. In `src/styles/global.css`, add at the top:
   ```css
   @font-face {
     font-family: 'Alte Haas Grotesk';
     src: url('/fonts/AlteHaasGrotesk-Bold.woff2') format('woff2');
     font-weight: 700 800;
     font-style: normal;
     font-display: swap;
   }
   @font-face {
     font-family: 'Alte Haas Grotesk';
     src: url('/fonts/AlteHaasGrotesk-Regular.woff2') format('woff2');
     font-weight: 400 600;
     font-style: normal;
     font-display: swap;
   }
   ```
4. The `--font-display` token in `tokens.css` already has `'Alte Haas Grotesk'` as first in the font stack — no other changes needed.

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel           # Follow the prompts; auto-detects Vite
```

### Option B — Vercel Dashboard (recommended for first deploy)

1. Push the project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo.
3. Vercel auto-detects Vite. Leave all settings as default.
4. Click **Deploy**. Your site is live on a `*.vercel.app` URL within ~60 s.

---

## Pointing your domain to Vercel (DNS setup)

> These steps are for a domain registered at any DNS provider (e.g. Namecheap, GoDaddy, Cloudflare, OVH).

### Step 1 — Add the domain in Vercel

1. In the Vercel dashboard → your project → **Settings** → **Domains**.
2. Enter your domain, e.g. `votum.io` and `www.votum.io`. Click **Add**.
3. Vercel will show you the DNS records to set — keep this page open.

### Step 2 — Set DNS records at your registrar

Vercel will ask for one of two configurations:

**Recommended (A + CNAME):**

| Type  | Name  | Value            | TTL  |
|-------|-------|------------------|------|
| A     | @     | `76.76.21.21`    | Auto |
| CNAME | www   | `cname.vercel-dns.com` | Auto |

**Alternative (both CNAME — if your registrar supports CNAME flattening on root):**

| Type  | Name  | Value                  | TTL  |
|-------|-------|------------------------|------|
| CNAME | @     | `cname.vercel-dns.com` | Auto |
| CNAME | www   | `cname.vercel-dns.com` | Auto |

### Step 3 — Wait for propagation

DNS changes typically take 5–30 minutes, occasionally up to 48 hours.
Vercel's dashboard turns the domain green once it detects the correct records.

### Step 4 — HTTPS

Vercel provisions a free TLS certificate (Let's Encrypt) automatically — no action needed.

---

## Customisation checklist

- [ ] Swap logo placeholder → real logo SVG
- [ ] Activate Alte Haas Grotesk font files
- [ ] Update contact email in `CtaBanner.jsx` (`mailto:hello@votum.io`)
- [ ] Update company address/locations in `Footer.jsx`
- [ ] Replace case study content in `Cases.jsx` with real projects
- [ ] Link social icons in `Footer.jsx` to real profiles
- [ ] Add a `#contact` form or integrate Calendly / HubSpot
- [ ] Add `#about` and `#blog` sections / pages
- [ ] Set `<title>` and `<meta description>` in `index.html`
- [ ] Add `public/favicon.ico` and `public/og-image.png`

---

*Built with the VOTUM brand system — Engineered for impact.*
