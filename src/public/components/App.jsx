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
    3. преобразовать class components to stateless components везде, где это возможно
    // complited:
    // cards
    4. make footer and started page
    9. В revise если нет ни одной карточки для revise, выводить список топ 5 ближайших к повторению карточек
    10. В revise и test не выводить карточки, где пропущен вопрос или ответ
    11. пофиксить css in Deck (quantity)
    12. адаприровать cssCards
    13. пофиксить css в Revise. Сделать контейнер в 600px а все внутри w: 100%
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
