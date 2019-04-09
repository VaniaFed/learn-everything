import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

import App from '../public/components/App'


// global.React = React

const logger = (req, res, next) => {
  console.log(`${req.method} request for ${req.url}`)
  next()
}

const app = express()
  .use(logger)

app.get('*', (req, res) => {
  const body = renderToString(<App />)
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Document</title>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    </html>
  `)
})

app.listen(3000, () => console.log(`Server was running at 'http://localhost:3000'`))
