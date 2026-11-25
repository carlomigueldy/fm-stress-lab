/**
 * Contract every module in `src/widgets/` must default-export.
 *
 * `render()` must return an element whose `data-widget` attribute equals `id`.
 */
export interface Widget {
  id: string;
  title: string;
  render(): HTMLElement;
}
