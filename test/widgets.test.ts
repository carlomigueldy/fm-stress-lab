// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import type { Widget } from '../src/widget';

const modules = import.meta.glob<{ default: Widget }>('../src/widgets/*.ts', { eager: true });

describe('widgets', () => {
  it('discovers at least one widget', () => {
    expect(Object.keys(modules).length).toBeGreaterThan(0);
  });

  for (const [path, mod] of Object.entries(modules)) {
    it(`${path} renders an element with data-widget equal to its id`, () => {
      const widget = mod.default;
      const el = widget.render();
      expect(el).toBeInstanceOf(HTMLElement);
      expect(el.getAttribute('data-widget')).toBeTruthy();
      expect(el.getAttribute('data-widget')).toBe(widget.id);
    });
  }
});
