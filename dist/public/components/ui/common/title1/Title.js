"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Title = function Title(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? 'Title' : _ref$content;
  return _react["default"].createElement("h2", {
    className: css.title
  }, content);
};

Title.propTypes = {
  content: _propTypes["default"].string
};
var _default = Title;
exports["default"] = _default;