import type { Widget } from '../widget';

const s2w1: Widget = {
  id: 's2w1',
  title: 'Stress widget s2w1',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s2w1 is alive.';
    return el;
  },
};

export default s2w1;
