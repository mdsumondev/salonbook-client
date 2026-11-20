<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# salonbook

npm-workspaces + Turborepo monorepo. Next.js 16.4.5 (Turbopack), React 19.3.1, Tailwind CSS v4, shadcn/ui `base-nova` built on Base UI.

`CLAUDE.md` only contains `@AGENTS.md`; edit this file, not that one.

## Commands

Run from the repo root. npm is the package manager (`package-lock.json`, `packageManager: npm@10.2.3`) — the README's `pnpm dlx` example is stale.

| Task      | All workspaces      | Single workspace                  |
| --------- | ------------------- | --------------------------------- |
| dev       | `npm run dev`       | `npm run dev -w web` (port 3000)  |
| build     | `npm run build`     | `npm run build -w web`            |
| typecheck | `npm run typecheck` | `npm run typecheck -w web`        |
| lint      | `npm run lint`      | `npm run lint -w web`             |
| format    | `npm run format`    | `npm run format -w @workspace/ui` |

- There is no test runner or `test` script, and no CI. Don't invent test commands; verify with `npm run typecheck` and `npm run build`.
- `npm run lint` is not a gate: it invokes `eslint` with no globs, the shared flat config has no `files` patterns for `.ts`/`.tsx`, and `eslint-plugin-only-warn` downgrades violations to warnings. It exits 0 and skips almost all source. Use `typecheck` for real failures.
- Root `.eslintrc.js` is legacy and unused. Real lint config is flat config in each workspace (`eslint.config.js`), assembled from `packages/eslint-config/*`.
- `format` only rewrites `**/*.{ts,tsx}`, not JSON/Markdown/CSS.

## Layout

- `apps/web` — the only app: Next.js App Router under `app/`; app-local `components/`, `hooks/`, `lib/` are imported as `@/*`.
- `packages/ui` — `@workspace/ui`, shared components. Consumed as TypeScript source via `transpilePackages: ["@workspace/ui"]`; it has no build step.
- `packages/eslint-config`, `packages/typescript-config` — shared configs only, no build/lint scripts.

## UI and styling

- Add shadcn components with `npx shadcn@latest add <name> -c apps/web`. Per `apps/web/components.json` they are written into `packages/ui/src/components/`, not `apps/web/components/`.
- Generated components use `@base-ui/react` (Base UI) and the `base-nova` style, not Radix. Don't paste Radix-based shadcn snippets by hand.
- Import shared UI as `@workspace/ui/components/<name>`, app-local code as `@/components/...`. `cn` comes from the `cn` package (a clsx + tailwind-merge replacement), re-exported by `@workspace/ui/lib/utils`.
- `packages/ui/package.json` `exports` exposes only `globals.css`, `postcss.config`, `lib/*`, `components/*`, `hooks/*`. Keep shared code in those folders or add an export, otherwise the app cannot resolve it.
- Tailwind v4, no `tailwind.config.*`. The single stylesheet is `packages/ui/src/styles/globals.css` (imported by `apps/web/app/layout.tsx`); tokens, radius, and dark-mode variables live there. `apps/web/postcss.config.mjs` just re-exports the UI package's config.

## Conventions

- Prettier: no semicolons, double quotes, 2-space indent, LF, print width 80, Tailwind class sorting via `cn`/`cva`.
- Dark mode is class-based through `next-themes` in `apps/web/components/theme-provider.tsx`; pressing `d` toggles it.
