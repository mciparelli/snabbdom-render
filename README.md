# snabbdom-render

simple utility to patch new Snabbdom VDOMs in the same DOM container

## Installation

`npm i --save @mciparelli/snabbdom-render`

## Usage

```js
import makeRender from 'snabbdom-render';
import Snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import attrsModule from 'snabbdom/modules/attributes';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';

const patch = Snabbdom.init([
  classModule,
  attrsModule,
  propsModule,
  eventlistenersModule
]);

const render = makeRender(document.querySelector('.container'), patch);

render(h('div', 'first vdom'));

setTimeout(() => {
  render(h('div', 'second vdom'));
}, 1000);
```
