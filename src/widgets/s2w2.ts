import type { Widget } from '../widget';

const s2w2: Widget = {
  id: 's2w2',
  title: 'Stress widget s2w2',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s2w2 is alive.';
    return el;
  },
};

export default s2w2;
