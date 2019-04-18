import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import css from './welcomeScreen.module.sass'
import '../../../../../../libs/granim.min'

class WelcomeScreen extends Component {
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
      <div className={css.container}>
        <canvas className={css.bg}></canvas>
        <div className='container'>
          <h2 className={css.logo}>Revise on Time!</h2>
          <div className={css.desc}>
            <p className={css.text}>Это приложение позволяет
            помочь организовать свое обучение. Изначально создавалось для изучения языков.</p>
            <Link className={css.btn} to='/registration'>Попробовать</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeScreen
