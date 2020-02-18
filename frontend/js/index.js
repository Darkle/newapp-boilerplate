import {html, render} from './web_modules/lit-html.js'
import { create, repeatOnChange } from './web_modules/causalityjs.js'

const store = create({ count: 0 })

// Reference the actions so dont recreate the functions inline on each render
const increaseCount = () => {
  console.log('Increase Count button clicked')
  store.count = store.count + 1
}
const decreaseCount = () => {
  console.log('Decrease Count button clicked')
  store.count = store.count - 1
}
/*
 If we are not reading a value in the template that has been changed, repeatOnChange will not be called.
 */
const MyButtons = () => html`
  <button @click=${increaseCount}>
    Increase Count
  </button>
  <button @click=${decreaseCount}>
    Decrease Count
  </button>
  <span> Count: ${store.count}</span>
`
function renderOnStateChange(component, root) {
  repeatOnChange(() => {
    console.log('We are re-rendering')
    render(component(), root)
  })
}

const app = document.querySelector('#app')

renderOnStateChange(MyButtons, app)