import { h, render } from './web_modules/preact.js'
import htm from './web_modules/htm.js'

const html = htm.bind(h)

function SomePreactComponent() {
  return html`<h1 style="color: red">Hello, World!</h1>`
}

render(html`<${SomePreactComponent} />`, document.getElementById('app'))