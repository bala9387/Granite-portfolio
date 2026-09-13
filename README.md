# Sri Akshaya Granites — Official Website & Portfolio

A modern, high-performance B2B & B2C granite tile manufacturer portfolio and product showcase website built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

---

## Features

- **Architectural Luxury Design System**: Obsidian (`#0D1112`), Charcoal (`#171C1E`), Deep Stone (`#222729`), Warm Gold (`#C99A4A`), and Stone White (`#F5F3EF`).
- **Professional Typography**: `Outfit` geometric display headings paired with `Plus Jakarta Sans` for body copy, technical tolerances, and tabular numbers.
- **Product Catalog (9 Varieties)**: High-resolution macro stone textures, specifications, dimensions, and dynamic RFQ routing for Black Galaxy, White Crystal, Tan Brown, Steel Grey, Imperial Red, Ivory Brown, Blue Pearl, Kashmir White, and Multicolour Red.
- **Dynamic Case Studies**: Architectural portfolio with category filtering (Residential, Commercial, Hospitality, Interior, Outdoor).
- **Interactive RFQ & Quotation Flow**: Multi-field request-for-quote with pre-selected stone varieties, finishes, and instant confirmation screens.
- **API & Email Handling**: Server-side API endpoints (`/api/quote`, `/api/contact`) with Zod schema validation and graceful Resend fallback logging.
- **SEO & Structured Data**: Dynamic XML sitemap, `robots.txt`, OpenGraph metadata, and Schema.org Organization JSON-LD.

---

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

---

## Deploying to Netlify

The application is pre-configured for one-click deployment on Netlify with the official `@netlify/plugin-nextjs` runtime.

### Option 1: Deploy via Git (Recommended)

1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**:
   ```bash
   git remote add origin https://github.com/<your-username>/sri-akshaya-granites.git
   git branch -M main
   git push -u origin main
   ```
2. Go to your [Netlify Dashboard](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select your repository. Netlify will automatically detect:
   - **Base directory**: `/` (or leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Runtime**: `@netlify/plugin-nextjs` (from `netlify.toml`)
4. *(Optional)* Add Environment Variables in **Site settings > Environment variables**:
   - `RESEND_API_KEY`: *(Optional)* Your Resend API key for live emails.
   - `CONTACT_EMAIL`: Recipient email (default: `sales@sriakshayagranites.com`).
5. Click **"Deploy site"**.

### Option 2: Deploy via Netlify CLI

```bash
# 1. Install Netlify CLI globally
npm install -g netlify-cli

# 2. Login to your Netlify account
netlify login

# 3. Initialize and deploy
netlify init

# 4. Deploy production build
netlify deploy --build --prod
```

---

## Configuration Files

- [`netlify.toml`](./netlify.toml): Netlify build settings, Node.js 20 environment, Next.js plugin, and caching/security headers.
- [`.nvmrc`](./.nvmrc): Enforces Node.js version 20 across local and CI/CD environments.
- [`.env.example`](./.env.example): Template for production environment variables.
