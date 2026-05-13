# Express.js on Cloudflare Workers

Basic Express.js app configured for Cloudflare Workers using `nodejs_compat` and `cloudflare:node`.

## How to Use

```bash
pnpm install
pnpm dev
```

Local development runs at `http://localhost:8787`.

## Deploy

```bash
pnpm deploy
```

## Available routes

- `/` - HTML home page
- `/about` - HTML about page
- `/api-data` - sample JSON endpoint
- `/healthz` - health check
