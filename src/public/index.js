import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import storeFactory from './store/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../stylesheet/based.sass'
import '../../stylesheet/auxiliary.sass'

const store = storeFactory()

window.React = React
window.store = store

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
