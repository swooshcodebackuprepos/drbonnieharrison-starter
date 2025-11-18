# Dr. Bonnie Harrison — Website Starter

A warm, accessible Next.js 14 + Tailwind starter for a culturally‑centered mental health practice.

## Quick start (local)

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000

## One‑click deploy (Vercel)

Use this link after you push to GitHub (replace the repo URL in the query string).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=REPLACE_WITH_YOUR_REPO_URL&project-name=drbonnieharrison&repository-name=drbonnieharrison&env=SITE_URL,CONTACT_FORWARD_TO&envDescription=Public%20site%20URL%20and%20email%20forward%20address)

Set `SITE_URL` to your live URL (e.g., `https://www.example.com`).

## Go live on your domain (www)

1) In Vercel, add your domain in Project → Settings → Domains.  
2) For `www.example.com`: create a CNAME at your DNS host to the target Vercel gives you.  
3) For apex `example.com`: add an A record to the IP Vercel shows (often `76.76.21.21`).  
4) Set env var `SITE_URL=https://www.example.com` and redeploy.  
5) Confirm the domain shows “Ready” in Vercel.

## SEO

- `app/sitemap.ts` serves `/sitemap.xml`.  
- `app/robots.ts` serves `/robots.txt` and points to the sitemap.

## Customize

- Replace `/public/hero.jpg` and `/public/bonnie-speaking.jpg`.  
- Edit copy in the app pages.  
- Update address/phone/hours in `app/layout.tsx` and Footer.  
- Add scheduling only with a HIPAA‑aware vendor.

## Deploy

- Vercel: create project, link repo, set `SITE_URL`, deploy.  
- Add 301s from prior domains you own (Settings → Redirects).

## Monitor

- Check Core Web Vitals after launch in Search Console.

## License

MIT
