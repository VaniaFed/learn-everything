import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js/dist/Chart.bundle.min'
import moment from 'moment'
import css from './graphExample.module.sass'

export default class GraphExample extends Component {
  componentDidMount () {
    const ctx = document.querySelector('#graphExample')
    const data = {
      labels: [
        moment('2019.04.01', 'YYYY.MM.DD'),
        moment('2019.04.04', 'YYYY.MM.DD'),
        moment('2019.04.11', 'YYYY.MM.DD'),
        moment('2019.04.26', 'YYYY.MM.DD'),
        moment('2019.05.27', 'YYYY.MM.DD'),
        moment('2019.07.28', 'YYYY.MM.DD')
      ],
      datasets: [
        {
          label: 'Интервал повторения (в днях)',
          borderColor: '#304ffe',
          borderWidth: 2,
          fill: false,
          data: [1, 3, 7, 15, 31, 63]
        }
      ]
    }
    const exampleChart = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        tooltips: {
          mode: 'point',
          axis: 'y'
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
