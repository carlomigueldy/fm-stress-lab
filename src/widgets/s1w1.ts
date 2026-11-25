import type { Widget } from '../widget';

const s1w1: Widget = {
  id: 's1w1',
  title: 'Stress widget s1w1',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s1w1 is alive.';
    return el;
  },
};

export default s1w1;
