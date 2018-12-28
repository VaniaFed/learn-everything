const db = require('./options');

class User {
  static create(login, password, cb) {
    const user = { login, password };
    const sql = `INSERT INTO user ${user}`;
    db.query(sql, cb);
  }

  static login(inputLogin, inputPassword, cb) {
    const sql = `SELECT * FROM user WHERE login = ${inputLogin} AND password = ${inputPassword}`;
    db.query(sql, cb);
  }
}

module.exports = User;
