/**
 * Contract every module in `src/widgets/` must default-export.
 *
 * `id` must be unique across widgets, and `render()` must return an element whose
 * `data-widget` attribute equals `id`.
 */
export interface Widget {
  id: string;
  title: string;
  render(): HTMLElement;
}
