import type { Widget } from '../widget';

const s4w1: Widget = {
  id: 's4w1',
  title: 'Stress widget s4w1',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s4w1 is alive.';
    return el;
  },
};

export default s4w1;
