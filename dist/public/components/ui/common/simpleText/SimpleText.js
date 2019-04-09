"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleText = function SimpleText(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? 'Обычный текст' : _ref$content,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return _react["default"].createElement("p", {
    className: "simple_text ".concat(className)
  }, content);
};

SimpleText.propTypes = {
  content: _propTypes["default"].string
};
var _default = SimpleText;
exports["default"] = _default;