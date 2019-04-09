"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var CardsNav = function CardsNav(_ref) {
  var _ref$deckId = _ref.deckId,
      deckId = _ref$deckId === void 0 ? -1 : _ref$deckId;
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    className: css.link,
    to: "/test/".concat(deckId)
  }, "\u0422\u0435\u0441\u0442"), _react["default"].createElement(_reactRouterDom.Link, {
    className: css.link,
    to: "/revise/".concat(deckId)
  }, "\u0417\u0430\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0435"));
};

var _default = CardsNav;
exports["default"] = _default;
CardsNav.propTypes = {
  deckId: _propTypes["default"].string.isRequired
};