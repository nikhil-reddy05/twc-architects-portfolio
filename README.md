This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Style Contract (Design System)

To keep the portfolio visually consistent, all new UI should follow these global rules:

- **Use design tokens from `src/app/globals.css`** for color, spacing, radius, and motion (avoid hardcoded hex colors and ad-hoc timing values).
- **Palette:** architectural grayscale base (`--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-border`) with one restrained accent (`--color-accent`).
- **Typography hierarchy:** use standardized classes/tags for `display`, `h1`, `h2`, `body`, and `caption` sizing/weight/letter spacing.
- **Layout grid:** wrap page content in `.app-container`; use `.page-section` and `.flow-rhythm` for consistent vertical spacing.
- **Components:** prefer shared utility classes like `.surface-card`, `.field-control`, `.btn-accent`, `.btn-surface`, and `.link-accent` before creating one-off styles.
