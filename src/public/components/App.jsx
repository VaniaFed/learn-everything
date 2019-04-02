import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './ui/header/Header'
import Test from './ui/test/Test'
import Cards from './ui/cards/Cards'
import Revise from './ui/revise/Revise'
import Whoops404 from './ui/whoops404/Whoops404'
// import Footer from './footer/Footer'
// import StartedPage from './started'

import { DecksList } from './containers/DecksList'
import { CardsList } from './containers/CardsList'
import { TestList } from './containers/TestList'
import { ReviseList } from './containers/ReviseList'

/*
  TODO:
    1. remove { store } from presentation components
    2. add propTypes and defaultProps to components
    3. add revise
    4. COMPLETED when there is no one card to revise in revise, render button to come back to previous page
    5. make footer and started page
    6. add margins to buttons
*/
class App extends Component {
  render () {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={DecksList} />
          <Redirect from='/decks' to='/' />
          <Route exact path='/decks' component={DecksList} />
          <Route path='/deck/:id' component={CardsList} />
          <Route path='/test/:id' component={TestList} />
          <Route path='/revise/:id' component={ReviseList} />
          <Route component={Whoops404} />
          {/* <Footer /> */}
        </Switch>
      </HashRouter>
    )
  }
}

export default App
