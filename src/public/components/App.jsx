import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './ui/header/Header'
import Test from './ui/test/Test'
import Cards from './ui/cards/Cards'
import Revise from './ui/revise/Revise'
import Whoops404 from './ui/whoops404/Whoops404'
// import Footer from './footer/Footer'
// import StartedPage from './started'

import { DecksList } from './containers/DecksList'

class App extends Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  componentWillMount () {
    this.unsubscribe = this.props.store.subscribe(
      () => this.forceUpdate()
    )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={DecksList} />
          <Route exact path='/decks' component={DecksList} />
          <Route path='/deck/:id' component={(props) => <Cards {...props} />} />
          <Route path='/test/:id' component={(props) => <Test {...props} />} />
          <Route path='/revise/:id' component={(props) => <Revise {...props} />} />
          <Route component={Whoops404} />
          {/* <Footer /> */}
        </Switch>
      </HashRouter>
    )
  }
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App
