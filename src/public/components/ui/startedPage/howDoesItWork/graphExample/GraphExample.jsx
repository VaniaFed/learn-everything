import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

import css from './graphExample.module.sass'

export default class GraphExample extends Component {
  componentDidMount () {
    const ctx = document.querySelector('#graphExample')
    const dataSet = [
      {
        x: new Date(2019, 5, 16),
        y: 10
      },
      {
        x: new Date(2019, 6, 16),
        y: 20
      },
      {
        x: new Date(2019, 7, 16),
        y: 20
      },
      {
        x: new Date(2019, 8, 16),
        y: 20
      },
      {
        x: new Date(2019, 9, 16),
        y: 20
      },
      {
        x: new Date(2019, 10, 16),
        y: 20
      }
    ]
    const set = [1, 2, 4, 5, 6, 3]
    const exampleChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: 'hello',
        backgroundColor: '#fff',
        data: set
      },
      options: {
        tooltips: {
          // mode: 'point',
          // axis: 'y'
        },
        title: {
          display: true,
          text: 'График повторения'
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }]
        }
      }
    })
  }
  render () {
    return (
      <div className={css.container}>
        <canvas id='graphExample'></canvas>
      </div>
    )
  }
}
