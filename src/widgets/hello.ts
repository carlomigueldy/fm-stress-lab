import type { Widget } from '../widget';

const hello: Widget = {
  id: 'hello',
  title: 'Hello',
  render() {
    const el = document.createElement('p');
    el.dataset.widget = this.id;
    el.textContent = 'Hello from the example widget.';
    return el;
  },
};

export default hello;
