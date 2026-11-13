# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal single-page tool (package name `service-pacesetter`) that sets a pace and tracks a count of meters serviced against an hourly countdown. Next.js (App Router) + React 19 with the React Compiler enabled, Tailwind 4, shadcn/ui (Base UI primitives), Jotai, Bun, Biome.

## Commands

Bun is the package manager and test runner.

```bash
bun i                      # install
bun run dev                # next dev (http://localhost:3000)
bun run build              # next build
bun run lint               # biome check (add --fix to apply)
bun run format             # biome format --write
bun test                   # run all tests (Bun test runner, not Jest/Vitest)
bun test src/__tests__/count.test.tsx   # single test file
bun test -t "increments"   # filter by test name
bun run comp <Name> [-e element]        # scaffold component + test from utils/create-component/assets templates
```

The husky pre-commit hook runs `bun run lint --fix` then `bun test --changed`.

## Architecture

**State is Jotai atoms in `src/atoms/`, re-exported through `src/atoms/index.ts`.** The pieces only make sense together:
- `timer.ts` holds `millisecondsAtom` (remaining time, resettable), `totalAtom` (absolute end timestamp), `runningAtom`, and a derived `timeAtom` (formatted via `src/lib/time.ts`).
- `counter.ts` holds `goalAtom`, derived `paceAtom` (`goal / 7.5`, rounded up), and `countAtom`.
- `controller.ts` is a write-only action atom (`start` | `stop` | `add`) that orchestrates the others: start sets the end timestamp to now + `HOUR`, add extends it by `HOUR`, stop resets timer and count.
- `countdown.ts` is a `jotai-effect` `atomEffect` that drives a `requestAnimationFrame` loop while `runningAtom` is true, writing remaining ms (`totalAtom - Date.now()`) into `millisecondsAtom`. The countdown is wall-clock based, not tick-counted.

UI components in `src/components/` read/write these atoms; `src/components/ui/` is shadcn-generated (excluded from Biome). User-facing strings live in `src/data/content.ts` (`Copy`), constants (e.g. `HOUR`, `DEFAULT_GOAL`) in `src/constants/main.ts`, and shared `data-testid` values in `src/constants/tests.ts` (`TestID` enum). Route files and PWA/SEO metadata (manifest, robots, sitemap, OG image) are in `src/app/`.

## Testing

Tests live in `src/__tests__/` (bunfig sets `root` there) and use `bun:test` with Happy DOM (`GlobalRegistrator`) and Testing Library, preloaded from `src/__tests__/setup/`. Tests render components inside a Jotai `Provider` with a `createStore()` to set/inspect atom state; query copy via `Copy` from `@/data/content` and elements via `TestID`.

## Conventions

- Path alias `@/*` → `src/*`.
- Biome formatting: 2-space indent, 100-col lines, arrow functions without parens for a single param (`x => ...`), organized imports. `useExhaustiveDependencies` is off. Imports in source are grouped with `// Theirs` / `// Ours` comments.
- Spell-check config in `cspell.json`.
