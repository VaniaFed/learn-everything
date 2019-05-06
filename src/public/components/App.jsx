import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from './ui/header/Header'
import Footer from './ui/footer/Footer'
import StartedPage from './ui/startedPage/StartedPage'
import Whoops404 from './ui/whoops404/Whoops404'

import { DecksList } from './containers/DecksList'
import { CardsList } from './containers/CardsList'
import { TestList } from './containers/TestList'
import { ReviseList } from './containers/ReviseList'

import ModalAuthorization from './ui/Modal/ModalAuthorization'
import ModalRegistration from './ui/Modal/ModalRegistration'

/*
  TODO:
    11. создать анимацию для выпадающего адаптивного меню
    12. в Revise добавить кнопку "показать график",
    которая перенаправит на страницу с графиком текущей Deck при помощи chart.js
    13. В Revise: если забыл, обнулять
    15. Cards: поиск по картачкам
    16. Cards: sort by date revise (by default)
    17. React tests
    19. Зарефакторить modals: вынести общий код в контейнер и не только :)
    20. Изучить и добавить HOC везде, где это необходимо
    21. Make code schem: with the help of UML diagrams
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
