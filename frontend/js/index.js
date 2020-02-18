import htm from './web_modules/htm.js'
import { h, app } from './web_modules/hyperapp.js'

const html = htm.bind(h)

const appState = {
  count: 0
}

const appActions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  html`<div>
    <h1>${state.count}</h1>
    <button onclick=${() => actions.down(1)}>-</button>
    <button onclick=${() => actions.up(1)}>+</button>
  </div>`
)

app(appState, appActions, view, document.querySelector('#app'))