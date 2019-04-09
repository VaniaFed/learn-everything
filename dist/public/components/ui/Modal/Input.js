"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Input = function Input(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Enter text' : _ref$placeholder;
  return _react["default"].createElement("input", {
    type: "text",
    className: className,
    placeholder: placeholder
  });
};

Input.propTypes = {
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
var _default = Input;
exports["default"] = _default;