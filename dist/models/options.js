"use strict";

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'learn_everything'
});
exports.db = db;