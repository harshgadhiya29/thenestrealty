// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only, skipped on Vercel),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// On Vercel (VERCEL=1), cloudflare is disabled and nitro/vite emits .vercel/output for deployment.
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { nitro } from "nitro/vite";

// Vercel runs with VERCEL=1 and expects Nitro output; Cloudflare builds use @cloudflare/vite-plugin instead.
const deployVercel = process.env.VERCEL === "1";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: deployVercel ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: deployVercel ? [nitro()] : [],
});
