import 'bootstrap/dist/css/bootstrap.css'
import '../sass/based.sass'
import '../sass/auxiliary.sass'

import React from 'react'
import ReactDom from 'react-dom'
// import { Provider } from 'react-redux'
import App from '../App'
import store from '../store'

const render = () => {
  ReactDom.render(
    // <Provider store={store}>
    <App store={store} />,
    // </Provider>,
    document.querySelector('#root')
  )
}

render()
