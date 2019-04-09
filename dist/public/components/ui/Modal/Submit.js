"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Submit = function Submit(_ref) {
  var className = _ref.className,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'Submit' : _ref$value,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function (f) {
    return f;
  } : _ref$onClick;
  return _react["default"].createElement("input", {
    type: "submit",
    className: className,
    value: value,
    onClick: onClick
  });
};

Submit.propTypes = {
  value: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
var _default = Submit;
exports["default"] = _default;