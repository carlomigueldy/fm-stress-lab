# fm-stress-lab

Disposable scratch web app for concurrency stress tests. Safe to delete.

## How to run

Requires Node 22 or newer.

```sh
npm ci          # install dependencies
npm run dev     # start the Vite dev server
npm run lint    # type-check (tsc --noEmit)
npm test        # run Vitest (every widget must render a data-widget element)
npm run build   # type-check and produce dist/
npm run preview # serve dist/ locally
```

## Adding a widget

Create one file, `src/widgets/<name>.ts`, that default-exports an object matching
`src/widget.ts` (`id`, `title`, `render()`). The widget's `render()` must return an
element with `data-widget` set to its `id`. Widgets are discovered automatically and
rendered sorted by `id` inside `<main id="widgets">`. No shared file needs editing.
