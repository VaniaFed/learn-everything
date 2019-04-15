import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import css from './StartedPage.module.sass'
import  '../../../libs/granim.min'

class StartedPage extends Component {
  componentDidMount () {
    const granimInstance = new Granim({
      element: `.${css.bg}`,
      direction: 'left-right',
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [ ['#FF4E50', '#F9D423'], ['#0575E6', '#00F260'] ],
          transitionSpeed: 10000
        }
      }
    })
  }

  render () {
    return (
      <main className={css.welcomeScreen}>
        <canvas className={css.bg}></canvas>
        <div className={css.container}>
          <div className={css.welcomeScreen__ttContent}>
            <h2 className={css.welcomeScreen__logo}>Revise on Time!</h2>
            <div className={css.welcomeScreen__motivation}>
              <p className={css.motivation__text}>Это приложение позволяет
              помочь организовать свое обучение. Изначально создавалось для изучения языков.</p>
              <Link className={css.welcomeScreen__btn} to='/checkin'>Попробовать</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

StartedPage.propTypes = {

}

export default StartedPage
