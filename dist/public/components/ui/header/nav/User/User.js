"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var User = function User() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    className: css.user__link,
    to: "/login"
  }, "\u0412\u043E\u0439\u0442\u0438"), _react["default"].createElement(_reactRouterDom.Link, {
    className: css.user__link,
    to: "/registration"
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"));
};

var _default = User;
exports["default"] = _default;