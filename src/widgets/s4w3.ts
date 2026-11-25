import type { Widget } from '../widget';

const s4w3: Widget = {
  id: 's4w3',
  title: 'Stress widget s4w3',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Stress widget s4w3 is alive.';
    return el;
  },
};

export default s4w3;
