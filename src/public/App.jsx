import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import Test from './test/Test';
import Decks from './decks/Decks';
import Cards from './cards/Cards';
import Revise from './revise/Revise';
import Whoops404 from './whoops404/Whoops404';
// import Footer from './footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Decks store={store} />} />
          <Route path="/test" component={Test} />
          <Route exact path="/decks" component={() => <Decks store={store} />} />
          <Route path="/cards" component={() => <Cards store={store} />} />
          <Route path="/revise" component={Revise} />
          <Route component={Whoops404} />
          {/* <Footer /> */}
        </Switch>
      </HashRouter>
    )
  }
}

export default App;