import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from './ui/header/Header'
import Whoops404 from './ui/whoops404/Whoops404'
// import Footer from './footer/Footer'
// import StartedPage from './started'

import { DecksList } from './containers/DecksList'
import { CardsList } from './containers/CardsList'
import { TestList } from './containers/TestList'
import { ReviseList } from './containers/ReviseList'

import ModalAuthorization from './ui/Modal/ModalAuthorization'
import ModalRegistration from './ui/Modal/ModalRegistration'

/*
  TODO:
    1. remove { store } from presentation components
    2. add propTypes and defaultProps to components
    4. make footer and started page
    5. add margins to buttons
    6. получать title и текущие cards в контейнерных компонентах
    7. в Deck выводить сколько карточек готовы к повторению
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
          <Route path='/registration' component={() => <ModalRegistration title='Регистрация' />} />
          <Route path='/login' component={() => <ModalAuthorization title='Авторизация' />} />
          <Route component={Whoops404} />
          {/* <Footer /> */}
        </Switch>
      </HashRouter>
    )
  }
}

export default App
