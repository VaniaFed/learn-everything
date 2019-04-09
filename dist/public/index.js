"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./components/App"));

var _store = _interopRequireDefault(require("./store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.React = _react["default"];
window.store = _store["default"];

_reactDom["default"].render(_react["default"].createElement(_reactRedux.Provider, {
  store: _store["default"]
}, _react["default"].createElement(_App["default"], null)), document.querySelector('#root'));