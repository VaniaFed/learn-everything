import React, { Component } from 'react';

import Header from './header/Header';
import Test from './test/Test';
// import Footer from './footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Test />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;