import type { Widget } from '../widget';

const s8w2: Widget = {
  id: 's8w2',
  title: 'Stress widget s8w2',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s8w2 is alive.';
    return el;
  },
};

export default s8w2;
