"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Answer = _interopRequireDefault(require("../answer/Answer"));

var _Question = _interopRequireDefault(require("../question/Question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var css = {};

var Row =
/*#__PURE__*/
function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.decks !== nextProps.decks;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          questionText = _this$props.questionText,
          answerText = _this$props.answerText,
          onChangeQuestion = _this$props.onChangeQuestion,
          onChangeAnswer = _this$props.onChangeAnswer,
          onDelete = _this$props.onDelete;
      return _react["default"].createElement("div", {
        className: css.item
      }, _react["default"].createElement("svg", {
        className: css["delete"],
        onClick: onDelete,
        viewBox: "0 0 64 64",
        width: "15px"
      }, _react["default"].createElement("path", {
        fill: "#1D1D1B",
        d: "M29 31.8L.5 60A2 2 0 1 0 3.5 63L32 34.4 60.5 63a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-2.9L35 31.8 63.4 3.4A2 2 0 1 0 60.6.6L32 29 3.4.6A2 2 0 0 0 .6 3.4l28.3 28.4z"
      })), _react["default"].createElement(_Question["default"], {
        questionText: questionText,
        onChange: onChangeQuestion
      }), _react["default"].createElement(_Answer["default"], {
        answerText: answerText,
        onChange: onChangeAnswer
      }));
    }
  }]);

  return Row;
}(_react.Component);

Row.propTypes = {
  questionText: _propTypes["default"].string,
  answerText: _propTypes["default"].string,
  onChangeQuestion: _propTypes["default"].func,
  onChangeAnswer: _propTypes["default"].func,
  onDelete: _propTypes["default"].func
};
var _default = Row;
exports["default"] = _default;