"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("./nav/Logo/Logo"));

var _User = _interopRequireDefault(require("./nav/User/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Header = function Header() {
  return _react["default"].createElement("header", {
    className: css.header
  }, _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    className: css.header_inner
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/decks"
  }, _react["default"].createElement(_Logo["default"], null)), _react["default"].createElement(_User["default"], null))));
};

var _default = Header;
exports["default"] = _default;