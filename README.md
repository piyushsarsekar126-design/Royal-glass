# Royal Glass — Website

React + Vite + Tailwind CSS + Framer Motion.

## Run
```
npm install
npm run dev
```

## Before going live (must do)
Open `src/data/siteConfig.js` and replace every TODO:
- `phoneDisplay`, `phoneRaw`, `whatsapp` (digits only, with country code, e.g. 919876543210)
- `email`, `address`

The WhatsApp button, the "Enquire" links and the quote form all use `whatsapp`,
so they will message the wrong number until it is replaced.

## Add real photos
1. Put images in `public/images/`
2. Project gallery: add entries to `gallery` in `src/data/siteConfig.js`
   (the "Our work" section appears automatically once it has photos).
3. Service cards: add `image: '/images/your-photo.jpg'` to any item in `src/data/services.js`.

## Edit services / cities
- Services and categories: `src/data/services.js`
- City list: `src/data/siteConfig.js`

## Deploy
Push to GitHub, import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`).
