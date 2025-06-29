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

## 🛠 Configuration Tips

- **Enable absolute imports** by updating `tsconfig.json`:

  > This allows you to use paths like `@/components/...` instead of relative paths like `../../components`.

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

  ## 🚫 Skipping ESLint in Production Builds

By default, Next.js runs ESLint during production builds (`next build`).  
To **skip ESLint checks in production**, you can configure `next.config.js` like this:

```js
// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
```
