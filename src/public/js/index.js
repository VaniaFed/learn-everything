import 'bootstrap/dist/css/bootstrap.css'
import '../sass/based.sass'
import '../sass/auxiliary.sass'

import React from 'react'
import ReactDom from 'react-dom'
import App from '../App'
import store from '../store'

const render = () => {
  ReactDom.render(
    <App store={store} />,
    document.querySelector('#root')
  )
}

render()
store.subscribe(() => {
  render()
})
