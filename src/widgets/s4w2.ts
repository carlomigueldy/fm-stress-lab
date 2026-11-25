import type { Widget } from '../widget';

const s4w2: Widget = {
  id: 's4w2',
  title: 'Stress widget s4w2',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s4w2 is alive.';
    return el;
  },
};

export default s4w2;
