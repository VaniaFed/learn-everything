"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

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

var Deck =
/*#__PURE__*/
function (_Component) {
  _inherits(Deck, _Component);

  function Deck() {
    _classCallCheck(this, Deck);

    return _possibleConstructorReturn(this, _getPrototypeOf(Deck).apply(this, arguments));
  }

  _createClass(Deck, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.name !== nextProps.name && this.props.quantity !== nextProps.quantity;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          quantity = _this$props.quantity,
          title = _this$props.title,
          onDelete = _this$props.onDelete;

      var formatWordCards = function formatWordCards(quantity) {
        if (quantity % 10 === 1) {
          return 'карточка';
        }

        if (quantity === 0 || quantity > 4 && quantity < 21) {
          return 'карточек';
        }

        if (quantity > 21 || quantity > 1) {
          return 'карточки';
        }
      };

      return _react["default"].createElement("div", {
        className: css.item
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/deck/".concat(id),
        className: "".concat(css.link, " button-hover")
      }, _react["default"].createElement("div", {
        className: css.quantity
      }, quantity, " ", formatWordCards(quantity)), _react["default"].createElement("div", {
        className: "card__name",
        style: this.style
      }, title)), _react["default"].createElement("a", {
        href: "#",
        className: "".concat(css["delete"], " button-hover"),
        onClick: function onClick() {
          onDelete();
        }
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"));
    }
  }]);

  return Deck;
}(_react.Component);

Deck.propTypes = {
  id: _propTypes["default"].number.isRequired,
  quantity: _propTypes["default"].number,
  name: _propTypes["default"].string,
  onDelete: _propTypes["default"].func
};
Deck.defaultTypes = {
  id: -1,
  quantity: 0,
  name: 'list',
  onDelete: function onDelete(f) {
    return f;
  }
};
var _default = Deck;
exports["default"] = _default;