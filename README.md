# Service Pacesetter

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2c68102-6c18-478b-ba8b-0b83eb46debe/deploy-status)](https://app.netlify.com/projects/service-pacesetter/deploys)

### Progressive Web Application

A personal tool to set the pace and track the count of meters serviced. Start a one-hour countdown, tap to log each meter, and see at a glance whether you're keeping up with your daily goal.

## The Problem

At my previous job as a Leak Survey Technician, I was expected to service a set number of meters each day. I struggled to meet that expectation. It was hard to tell, in the middle of a shift, whether I was ahead of or behind where I needed to be, and I often only found out when it was too late to catch up.

## Why It Was Needed

I needed a simple way to stay on pace toward a projected daily goal of completed services. Service Pacesetter breaks the daily goal into an hourly pace, runs a countdown for each hour, and lets me log each meter with one tap. The timer's color shows at a glance whether I'm on track, so I can adjust during the day instead of at the end of it.

## Features

- **Hourly countdown** – Start/End button runs a one-hour timer based on the wall clock, so it stays accurate even if the tab is throttled.
- **Color-coded time** – the timer shows green, then warning, then red as the hour runs down (below roughly 33% and 17% remaining).
- **Count tracking** – a floating action button adds one to the running total, enabled only while the timer is running.
- **Automatic pace extension** – each time the count reaches a multiple of the pace, another hour is added to the timer.
- **Daily goal and pace** – the goal defaults to 120 (minimum 100) and the pace is `goal / 7.5` meters per hour, rounded up.
- **Settings drawer** – swipe-down drawer to change the daily goal, with a toast confirmation.
- **Installable PWA** – web manifest, icons, robots, sitemap and Open Graph image included; portrait, standalone display.

Ending the session resets the timer and the count.

## Stack

- [Next.js](https://nextjs.org) (App Router) with React 19 and the React Compiler
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) primitives
- [Jotai](https://jotai.org) and `jotai-effect` for state
- [Bun](https://bun.sh) for package management and tests
- [Biome](https://biomejs.dev) for linting and formatting
- [Husky](https://typicode.github.io/husky) pre-commit hook

## Getting Started

Install dependencies:

```bash
bun i
```

Run the dev server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Command                            | Description                                                    |
| ---------------------------------- | -------------------------------------------------------------- |
| `bun run dev`                      | Start the Next.js dev server                                   |
| `bun run build`                    | Create a production build                                      |
| `bun run start`                    | Serve the production build                                     |
| `bun run lint`                     | Check with Biome (add `--fix` to apply fixes)                  |
| `bun run format`                   | Format with Biome                                              |
| `bun test`                         | Run tests with Bun's test runner (Happy DOM + Testing Library) |
| `bun run comp <Name> [-e element]` | Scaffold a component and its test                              |

On commit, Husky runs `bun run lint --fix` and `bun test --changed`.

## Project Structure

```
src/
  app/          Routes, layout, and PWA/SEO metadata
  atoms/        Jotai state: timer, counter, controller actions, countdown effect
  components/   Feature components (ui/ holds shadcn components)
  constants/    Shared constants and test IDs
  data/         UI copy and site metadata
  lib/          Time formatting, status color, utilities
  __tests__/    Tests and setup
utils/
  create-component/   Component scaffolding script
```
