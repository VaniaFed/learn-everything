"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DifficultyLevel = _interopRequireDefault(require("./difficultyLevel/DifficultyLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Card = function Card(_ref) {
  var _ref$question = _ref.question,
      question = _ref$question === void 0 ? 'Вопрос не задан' : _ref$question,
      _ref$answer = _ref.answer,
      answer = _ref$answer === void 0 ? 'Ответ не задан' : _ref$answer,
      _ref$nextDates = _ref.nextDates,
      nextDates = _ref$nextDates === void 0 ? function (f) {
    return f;
  } : _ref$nextDates,
      _ref$isPressedCheck = _ref.isPressedCheck,
      isPressedCheck = _ref$isPressedCheck === void 0 ? function (f) {
    return f;
  } : _ref$isPressedCheck,
      _ref$onCheckAnswer = _ref.onCheckAnswer,
      onCheckAnswer = _ref$onCheckAnswer === void 0 ? function (f) {
    return f;
  } : _ref$onCheckAnswer,
      _ref$onChoiceLevel = _ref.onChoiceLevel,
      onChoiceLevel = _ref$onChoiceLevel === void 0 ? function (f) {
    return f;
  } : _ref$onChoiceLevel;
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: css.remember__question
  }, isPressedCheck ? answer : question), isPressedCheck ? _react["default"].createElement(_DifficultyLevel["default"], {
    onChoiceLevel: onChoiceLevel,
    nextDates: nextDates
  }) : _react["default"].createElement("button", {
    className: "".concat(css.remember__check, " button-hover"),
    onClick: onCheckAnswer
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C"));
};

Card.propTypes = {
  question: _propTypes["default"].string.isRequired,
  answer: _propTypes["default"].string.isRequired,
  nextDates: _propTypes["default"].string.isRequired,
  isPressedCheck: _propTypes["default"].bool.isRequired,
  onCheckAnswer: _propTypes["default"].func.isRequired,
  onChoiceLevel: _propTypes["default"].func.isRequired
};
var _default = Card;
exports["default"] = _default;