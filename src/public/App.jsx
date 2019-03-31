import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Proptypes from 'prop-types'

import Header from './header/Header'
import Test from './test/Test'
import Decks from './decks/Decks'
import Cards from './cards/Cards'
import Revise from './revise/Revise'
import Whoops404 from './whoops404/Whoops404'
// import Footer from './footer/Footer'

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
          <Route exact path='/' component={() => <Decks />} />
          <Route path='/test/:id' component={(props) => <Test {...props} />} />
          <Route exact path='/decks' component={(props) => <Decks {...props} />} />
          <Route path='/deck/:id' component={(props) => <Cards {...props} />} />
          <Route path='/revise' component={Revise} />
          <Route component={Whoops404} />
          {/* <Footer /> */}
        </Switch>
      </HashRouter>
    )
  }
}
App.childContextTypes = {
  store: Proptypes.object.isRequired
}

export default App
