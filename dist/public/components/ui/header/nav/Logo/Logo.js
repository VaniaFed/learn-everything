"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Logo = function Logo() {
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", {
    className: css.logo__text
  }, "Train to Memorize!"), _react["default"].createElement("p", {
    className: css.logo__tagline
  }, "\u0417\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438 \u0440\u0430\u0432\u0438\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u0430\u043C\u044F\u0442\u044C"));
};

var _default = Logo;
exports["default"] = _default;