"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var DifficultyLevel = function DifficultyLevel(_ref) {
  var _ref$onChoiceLevel = _ref.onChoiceLevel,
      onChoiceLevel = _ref$onChoiceLevel === void 0 ? function (f) {
    return f;
  } : _ref$onChoiceLevel,
      _ref$nextDates = _ref.nextDates,
      nextDates = _ref$nextDates === void 0 ? function (f) {
    return f;
  } : _ref$nextDates;
  console.log(nextDates);
  return _react["default"].createElement("div", {
    className: "".concat(css.rememberContainer__complexity, " hidden")
  }, _react["default"].createElement("button", {
    onClick: function onClick() {
      return onChoiceLevel('forget');
    },
    className: "".concat(css.complexity__item, " button-hover")
  }, "\u0417\u0430\u0431\u044B\u043B (>_<)"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return onChoiceLevel('difficult');
    },
    className: "".concat(css.complexity__item, " button-hover")
  }, "\u0421\u043B\u043E\u0436\u043D\u043E (", nextDates.difficult, " \u0434.)"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return onChoiceLevel('normal');
    },
    className: "".concat(css.complexity__item, " button-hover")
  }, "\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E (", nextDates.normal, " \u0434.)"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return onChoiceLevel('easy');
    },
    className: "".concat(css.complexity__item, " button-hover")
  }, "\u041B\u0435\u0433\u043A\u043E (", nextDates.easy, " \u0434.)"));
};

DifficultyLevel.propTypes = {
  nextDates: _propTypes["default"].func,
  onChoiceLevel: _propTypes["default"].func
};
var _default = DifficultyLevel;
exports["default"] = _default;