import React, { Component } from 'react'
import WelcomeScreen from './welcomeScreen/WelcomeScreen'
import HowDoesItWork from './howDoesItWork/HowDoesItWork'
import Opportunities from './opportunities/Opportunities'

class StartedPage extends Component {
  render () {
    return (
      <div>
        <WelcomeScreen />
        <HowDoesItWork />
        <Opportunities />
      </div>
    )
  }
}

export default StartedPage
