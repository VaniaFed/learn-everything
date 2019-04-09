"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var Whoops404 = function Whoops404(_ref) {
  var _ref$location = _ref.location,
      location = _ref$location === void 0 ? '' : _ref$location;
  return _react["default"].createElement("div", {
    className: "".concat(css.whoops404__Container, " container")
  }, _react["default"].createElement("h1", {
    className: css.number404
  }, "404"), _react["default"].createElement("h1", {
    className: css.whoops404__title
  }, "Resource not found at '", location.pathname, "'"));
};

Whoops404.propTypes = {
  location: _propTypes["default"].string
};
var _default = Whoops404;
exports["default"] = _default;