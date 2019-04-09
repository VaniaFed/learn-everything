"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Question = function Question(_ref) {
  var _ref$questionText = _ref.questionText,
      questionText = _ref$questionText === void 0 ? '' : _ref$questionText;
  return _react["default"].createElement("div", {
    className: css.question__bg
  }, _react["default"].createElement("div", {
    className: css.title
  }, "\u0412\u043E\u043F\u0440\u043E\u0441"), _react["default"].createElement("input", {
    type: "text",
    className: "".concat(css.input, " ").concat(css.no_resize),
    disabled: true,
    value: questionText,
    placeholder: questionText && 'Вы не задали этот вопрос'
  }));
};

Question.propTypes = {
  questionText: _propTypes["default"].string
};
var _default = Question;
exports["default"] = _default;