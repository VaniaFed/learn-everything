const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'pug');

app.use(express.static('public'));

const port = 8080;

app.get('/', (req, res) => {
  res.render('pages/started', {});
});

app.get('/registration', (req, res) => {
  res.render('pages/registration', {});
});

app.get('/authorization', (req, res) => {
  res.render('pages/authorization', {});
});

app.post('/createUser', (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log('Server ran successful');
});

module.exports.express = express;
