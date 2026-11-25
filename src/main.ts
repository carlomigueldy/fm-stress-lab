import type { Widget } from './widget';

// Every module in src/widgets/*.ts is discovered automatically.
const modules = import.meta.glob<{ default: Widget }>('./widgets/*.ts', { eager: true });

const widgets = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

const container = document.querySelector<HTMLElement>('main#widgets');
if (!container) {
  throw new Error('Missing <main id="widgets"> in index.html');
}

for (const widget of widgets) {
  const section = document.createElement('section');
  section.className = 'widget';

  const heading = document.createElement('h2');
  heading.textContent = widget.title;

  section.append(heading, widget.render());
  container.append(section);
}
