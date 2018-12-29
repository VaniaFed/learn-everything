const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug');

const port = 3001;

app.get('/', (req, res) => {
  res.render('pages/started', {});
});

app.listen(port, () => {
  console.log('Server ran successful');
});

module.exports.express = express;
