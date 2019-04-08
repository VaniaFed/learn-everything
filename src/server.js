import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import Cards from './public/components/containers/CardsList'

global.React = React
const html = renderToString(<Cards />)

const logger = (req, res, next) => {
  console.log(`${req.method} request for ${req.url}`)
  next()
}

const sendHTMLPage = (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Document</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `)
}

const app = express()
  .use(logger)
  .use(sendHTMLPage)

app.listen(3000, () => console.log(`Server was running at 'http://localhost:3000'`))
