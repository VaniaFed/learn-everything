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
  var questionText = _ref.questionText,
      onChange = _ref.onChange;

  var questionValue = _react["default"].createRef();

  return _react["default"].createElement("div", {
    className: css.question__bg,
    onClick: function onClick() {
      return questionValue.current.focus();
    }
  }, _react["default"].createElement("div", {
    className: css.title
  }, "\u0412\u043E\u043F\u0440\u043E\u0441"), _react["default"].createElement("div", {
    className: css.textarea__container
  }, _react["default"].createElement("textarea", {
    className: "".concat(css.input, " ").concat(css.no_resize),
    ref: questionValue,
    defaultValue: questionText,
    placeholder: "Type a question",
    onBlur: function onBlur(e) {
      if (questionText !== questionValue.current.value || e.target !== questionValue.current) {
        onChange(questionValue.current.value);
      }
    }
  })));
};

Question.propTypes = {
  questionText: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
Question.defaultProps = {
  questionText: 'Вопрос',
  onChange: function onChange(f) {
    return f;
  }
};
var _default = Question;
exports["default"] = _default;