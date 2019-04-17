import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from './ui/header/Header'
import Whoops404 from './ui/whoops404/Whoops404'
import Footer from './ui/footer/Footer'
import StartedPage from './ui/startedPage/StartedPage'

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
    // completed:
    // cards
    // common
    // decks
    11. создать анимацию для выпадающего адаптивного меню
    12. в Revise добавить кнопку "показать график",
    которая перенаправит на страницу с графиком текущей Deck при помощи chart.js
    13. В Revise: если забыл, обнулять
    14. написать тесты
*/
class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='wrapper'>
          <div className='content'>
            <Header />
            <Switch>
              <Route exact path='/' component={DecksList} />
              <Redirect from='/decks' to='/' />
              <Route exact path='/decks' component={DecksList} />
              <Route path='/started' component={StartedPage} />
              <Route path='/deck/:id' component={CardsList} />
              <Route path='/test/:id' component={TestList} />
              <Route path='/revise/:id' component={ReviseList} />
              <Route path='/registration' component={() => <ModalRegistration title='Регистрация' />} />
              <Route path='/login' component={() => <ModalAuthorization title='Авторизация' />} />
              <Route component={Whoops404} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
