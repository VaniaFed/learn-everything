"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SimpleText = _interopRequireDefault(require("../simpleText/SimpleText"));

var _Button = _interopRequireDefault(require("../button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var NoOneCards = function NoOneCards(_ref) {
  var _ref$textMsg = _ref.textMsg,
      textMsg = _ref$textMsg === void 0 ? 'Here is no one cards' : _ref$textMsg,
      _ref$comeBack = _ref.comeBack,
      comeBack = _ref$comeBack === void 0 ? function (f) {
    return f;
  } : _ref$comeBack;
  return _react["default"].createElement("div", {
    className: css.not_found
  }, _react["default"].createElement(_SimpleText["default"], {
    content: textMsg,
    className: css.simple_text
  }), _react["default"].createElement(_Button["default"], {
    content: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E",
    onClick: comeBack
  }));
};

NoOneCards.propTypes = {
  textMsg: _propTypes["default"].string,
  comeBack: _propTypes["default"].func
};
var _default = NoOneCards;
exports["default"] = _default;