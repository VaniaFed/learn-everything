import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './header/Header';
import Test from './test/Test';
import ManageLists from './decks/Decks';
import Revise from './revise/Revise';
// import Footer from './footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <Header />
        <Route path="/test" component={Test} />
        <Route path="/decks" component={ManageLists} />
        <Route path="/revise" component={Revise} />
        {/* <Footer /> */}
      </HashRouter>
    )
  }
}

export default App;