# Reddys Digital — Website

Single-page website for **Reddys Digital Pvt. Ltd.**, a signage and large-format printing company in Cherlapally, Hyderabad.

## Editing content

All copy lives in [`app/content.ts`](app/content.ts): company details, stats, clients, services, work, industries, machinery and contacts. Edit that file; the page updates automatically.

- **Client logos:** add images to `public/clients/` and render them in the Clients section of `app/page.tsx`.
- **Project photos:** add images to `public/work/` and set `image: "/work/your-photo.jpg"` on the project in `content.ts`.

## Structure

```
app/
  content.ts    # all site copy
  page.tsx      # the page: header, hero, clients, services, work, capabilities, about, contact
  layout.tsx    # fonts, metadata, analytics
  globals.css   # colour tokens
next.config.ts  # redirects old /about, /services, ... URLs to page sections
```

Stack: Next.js, Tailwind CSS v4, Vercel Analytics.

## Development

```bash
npm install
npm run dev
```
