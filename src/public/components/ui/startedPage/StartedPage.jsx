import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WelcomeScreen from './welcomeScreen/WelcomeScreen'
import HowDoesItWork from './howDoesItWork/HowDoesItWork'

class StartedPage extends Component {

  render () {
    return (
      <div>
        <WelcomeScreen />
        <HowDoesItWork />
      </div>
    )
  }
}

StartedPage.propTypes = {

}

export default StartedPage
