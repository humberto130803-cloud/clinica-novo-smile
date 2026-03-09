# Website Factory — CLAUDE.md
# This file is inherited by spawned Claude Code instances.
# It tells Claude Code exactly how to build a client website from a brief.

## Identity
You are building a website for a local business in Panama on behalf of **Axiom Software & AI Solutions** (axiomsais.org).
All data you need is in `brief.md` in this directory. All assets (logo, photos) are in the `assets/` folder.

## Tech Stack (MANDATORY)
- React 19 + Vite 7 + Tailwind CSS 4 + Framer Motion
- `@tailwindcss/vite` plugin (NOT postcss)
- Deploy on Vercel under axiomsais.org subdomain

## Step 1: Scaffold
Run these commands:
```bash
npm create vite@latest . -- --template react
npm install framer-motion react-icons @tailwindcss/vite tailwindcss
```

## Step 2: Configure Infrastructure
Create/overwrite these files:

**vite.config.js:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [react(), tailwindcss()] })
```

**index.html:** Set `lang="es"`, add Google Fonts (pick a UNIQUE heading + body pairing — see brief.md for style seed), add favicon pointing to logo, add viewport-fit=cover meta, add theme-color meta matching the site's primary dark color.

**index.css:**
```css
@import 'tailwindcss';
@theme {
  /* Extract brand colors from brief.md and logo */
  --color-primary: ...;
  --color-primary-dark: ...;
  --color-primary-light: ...;
  /* etc */
  --font-heading: 'HeadingFont', sans-serif;
  --font-body: 'BodyFont', sans-serif;
}
@layer base {
  body {
    font-family: var(--font-body);
    background: var(--color-primary-dark);
    color: white;
  }
}
```
NEVER use raw `* {}` or `body {}` outside `@layer base` — it breaks Tailwind's preflight.

**App.css:** Empty file.

**siteConfig.js:** Single source of truth for all business data from brief.md.

Delete default `vite.svg` and `react.svg`.

## Step 3: Copy Assets
Move the logo from `assets/` to `public/logo.jpg` (or .png).
Move any before/after photos, team photos to `public/`.

## Step 4: Build Components
Build ALL components. Standard set for dental/service sites:
Navbar, Hero, TrustBar, About, Services, Promo, BeforeAfter (if photos available), Reviews, Location, FAQ, CTA, Footer, WhatsAppButton

Additional if data available: Team, KidsSection (pediatric), Gallery

### Design Rules
- Each site MUST look unique — different layout, different vibe, different creative choices
- Use the style seed from brief.md for design direction
- USE VISUAL IMAGERY everywhere (Unsplash photos with overlays, not plain colored backgrounds)
- Verify ALL Unsplash URLs with `curl -s -o /dev/null -w "%{http_code}" [url]` before finalizing
- ALL text in Spanish with proper accents: á, é, í, ó, ú, ñ, ¿, ¡
- Footer must include: `Desarrollado por Axiom Software & AI Solutions`

### iOS Safari Compatibility (CRITICAL)
- Add `overflow-hidden isolate` + `style={{ WebkitTransform: 'translateZ(0)' }}` on ANY section with `overflow-hidden` containing Framer Motion children
- Use `100dvh` instead of `100vh`
- Set background on both html and body elements

### Animation Pattern
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: i * 0.1 }}
```

## Step 5: Build & Verify
```bash
npm run build
```
Fix any errors before proceeding.

## Step 6: Deploy
```bash
git init
git add -A
git commit -m "Initial build: [business-name]"
gh repo create humberto130803-cloud/[repo-name] --public --source=. --push
npx vercel --prod --yes --name [project-name]
```

## Font Pairings Already Used (DO NOT REPEAT)
1. Playfair Display + Lato
2. DM Serif Display + DM Sans
3. Cormorant Garamond + Nunito Sans
4. Poppins + Inter
5. Quicksand + Nunito

## Color Schemes Already Used (DO NOT REPEAT)
1. Red/white
2. Teal/navy
3. Sage green/beige/cream
4. Navy/cyan
5. Coral/salmon + cream + teal accents
