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
        moment('2019.05.15', 'YYYY.MM.DD'),
        moment('2019.05.16', 'YYYY.MM.DD'),
        moment('2019.05.19', 'YYYY.MM.DD'),
        moment('2019.05.26', 'YYYY.MM.DD'),
        moment('2019.06.10', 'YYYY.MM.DD'),
        moment('2019.06.10', 'YYYY.MM.DD'),
      ],
      datasets: [
        {
          label: 'Кривая повторения',
          borderColor: '#304ffe',
          borderWidth: 2,
          fill: false,
          data: [1, 3, 7, 15]
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
