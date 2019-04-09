"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Button = function Button(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? 'Button' : _ref$content,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function (f) {
    return f;
  } : _ref$onClick;
  return _react["default"].createElement("button", {
    className: "".concat(css.button_default, " ").concat(className),
    onClick: onClick
  }, content);
};

Button.propTypes = {
  content: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var _default = Button;
exports["default"] = _default;