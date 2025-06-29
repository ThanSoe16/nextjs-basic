This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Next, change tsconfig.json for absolute paths

@/\* like that

If u want to skip eslint in production

Open next.config.js and enable the ignoreDuringBuilds option in the eslint config:

```bash
eslint: {ignoreDuringBuilds: true}
```
