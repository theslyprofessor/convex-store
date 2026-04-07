# ConvexCompose — convex.store

Marketing and marketplace site for ConvexCompose: pre-built business modules for full-stack Convex applications.

## Stack

- **Astro 6** (static output)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **MDX** support (`@astrojs/mdx`)
- **Bun** runtime
- **TypeScript** (strict)

## Develop

```bash
bun install
bun dev
# http://localhost:4321
```

## Build

```bash
bun run build       # outputs to ./dist
bun run preview     # serve the built site locally
```

## Project structure

```
src/
  components/         Astro components (Header, Footer, ModuleCard, ArchitectureDiagram)
  data/modules.ts     Source of truth for the module catalog
  layouts/BaseLayout.astro
  pages/
    index.astro                Landing page
    about.astro
    submit.astro
    modules/
      index.astro              Filterable module grid
      [slug].astro             Per-module page (generated from data/modules.ts)
    docs/
      index.astro
      architecture.astro
      getting-started.astro
  styles/global.css   Tailwind v4 entry + global styles
public/
  favicon.svg
Dockerfile            Multi-stage build → nginx:alpine
nginx.conf            SPA fallback + asset caching
```

## Adding a module

Edit `src/data/modules.ts` and add an entry to the `modules` array. The slug becomes the URL (`/modules/<slug>`), and the new card appears automatically on the landing page and modules index. No code changes required.

## Deployment (Hostinger VPS via Dokploy)

The site ships as a static bundle behind nginx in a single Docker image.

```bash
docker build -t convex-store .
docker run -p 80:80 convex-store
```

In Dokploy:

1. Create a new application pointing at this repo.
2. Build type: **Dockerfile**.
3. Domain: `convex.store` (and `www.convex.store`).
4. Enable Let's Encrypt SSL.
5. Deploy.

The Dockerfile uses `bun install --frozen-lockfile` for reproducible builds and a multi-stage build so the final image is just nginx serving `dist/`.

## License

Site content: see repo. ConvexCompose modules: per-module licenses.
