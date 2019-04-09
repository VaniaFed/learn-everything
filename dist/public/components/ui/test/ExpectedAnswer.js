"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var ExpectedAnswer = function ExpectedAnswer(_ref) {
  var _ref$answer = _ref.answer,
      answer = _ref$answer === void 0 ? 'Ответ' : _ref$answer,
      isPressedCheck = _ref.isPressedCheck;
  return _react["default"].createElement("div", {
    className: "".concat(css.answer__bg, " ").concat(isPressedCheck ? css.answer_without_shadow : '')
  }, _react["default"].createElement("div", {
    className: css.title
  }, "\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u043E\u0442\u0432\u0435\u0442"), _react["default"].createElement("textarea", {
    className: "".concat(css.input, " ").concat(css.no_resize),
    value: answer,
    disabled: true
  }));
};

var _default = ExpectedAnswer;
exports["default"] = _default;