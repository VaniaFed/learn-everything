"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Answer = function Answer(_ref) {
  var answerText = _ref.answerText,
      onChange = _ref.onChange;

  var answerValue = _react["default"].createRef();

  return _react["default"].createElement("div", {
    className: css.answer__bg,
    onClick: function onClick() {
      return answerValue.current.focus();
    }
  }, _react["default"].createElement("div", {
    className: css.title
  }, "\u041E\u0442\u0432\u0435\u0442"), _react["default"].createElement("textarea", {
    className: "".concat(css.input, " ").concat(css.no_resize),
    ref: answerValue,
    defaultValue: answerText,
    placeholder: "Type an answer...",
    onBlur: function onBlur() {
      if (answerText !== answerValue.current.value) {
        onChange(answerValue.current.value);
      }
    }
  }));
};

Answer.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  answerText: _propTypes["default"].string.isRequired
};
Answer.defaultProps = {
  onChange: function onChange(f) {
    return f;
  },
  answerText: 'Ответ'
};
var _default = Answer;
exports["default"] = _default;