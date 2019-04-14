import 'bootstrap/dist/css/bootstrap.min.css'
import '../../stylesheet/based.sass'
import '../../stylesheet/auxiliary.sass'

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store/store'

window.React = React
window.store = store

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
