import type { Widget } from '../widget';

const s8w5: Widget = {
  id: 's8w5',
  title: 'Stress widget s8w5',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s8w5 is alive.';
    return el;
  },
};

export default s8w5;
