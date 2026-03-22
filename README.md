# vedaops.dev

Next.js proving surface for **vedaops.dev**.

## Purpose
- bounded owned-performance proving site
- GA4 instrumentation sanity surface
- pagePath / hostName / route-level observability testbed
- Vercel deployment target for `vedaops.dev`

## Stack
- Next.js App Router
- React
- TypeScript
- Vercel

## Routes
- `/`
- `/about`
- `/contact`

## Environment
Create `.env.local` from `.env.example` and set:

- `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

GA will only load when `NEXT_PUBLIC_GA_ID` is set.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`

## Notes
This repo is intentionally small and controlled. It exists to help validate GA4 owned-performance assumptions before broader VEDA implementation.
