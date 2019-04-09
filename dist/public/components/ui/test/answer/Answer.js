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
  var _ref$onChangeAnswer = _ref.onChangeAnswer,
      onChangeAnswer = _ref$onChangeAnswer === void 0 ? function (f) {
    return f;
  } : _ref$onChangeAnswer,
      isPressedCheck = _ref.isPressedCheck,
      finallyUserAnswer = _ref.finallyUserAnswer;

  var userAnswer = _react["default"].createRef();

  return _react["default"].createElement("div", {
    className: "".concat(css.answer__bg, " ").concat(isPressedCheck ? css.answer_without_shadow : '')
  }, _react["default"].createElement("div", {
    className: css.title
  }, isPressedCheck ? 'Ваш ответ' : 'Ответ'), _react["default"].createElement("textarea", {
    className: "".concat(css.input, " ").concat(css.no_resize),
    ref: userAnswer,
    defaultValue: finallyUserAnswer,
    onChange: function onChange() {
      return onChangeAnswer(userAnswer.current.value);
    },
    placeholder: !isPressedCheck ? 'Введите ответ...' : 'Вы не ответили на этот вопрос',
    disabled: isPressedCheck ? 'disabled' : null
  }));
};

Answer.propTypes = {
  onChangeAnswer: _propTypes["default"].func.isRequired,
  isPressedCheck: _propTypes["default"].bool.isRequired,
  finallyUserAnswer: _propTypes["default"].string
};
var _default = Answer;
exports["default"] = _default;