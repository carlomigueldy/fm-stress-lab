import type { Widget } from '../widget';

const s8w3: Widget = {
  id: 's8w3',
  title: 'Stress widget s8w3',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s8w3 is alive.';
    return el;
  },
};

export default s8w3;
