"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require('./options');

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "create",
    value: function create(login, password, cb) {
      var user = {
        login: login,
        password: password
      };
      var sql = "INSERT INTO user ".concat(user); // md5

      db.query(sql, cb);
    }
  }, {
    key: "login",
    value: function login(inputLogin, inputPassword, cb) {
      var sql = "SELECT * FROM user WHERE login = ".concat(inputLogin, " AND password = ").concat(inputPassword); // md5

      db.query(sql, cb);
    }
  }, {
    key: "getListsId",
    value: function getListsId(cb) {
      var sql = 'SELECT lists_id FROM user';
      db.query(sql, cb);
    }
  }]);

  return User;
}();

module.exports = User;