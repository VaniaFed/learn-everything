"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("./ui/header/Header"));

var _Whoops = _interopRequireDefault(require("./ui/whoops404/Whoops404"));

var _DecksList = require("./containers/DecksList");

var _CardsList = require("./containers/CardsList");

var _TestList = require("./containers/TestList");

var _ReviseList = require("./containers/ReviseList");

var _ModalAuthorization = _interopRequireDefault(require("./ui/Modal/ModalAuthorization"));

var _ModalRegistration = _interopRequireDefault(require("./ui/Modal/ModalRegistration"));

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

/*
  TODO:
    1. remove { store } from presentation components
    2. add propTypes and defaultProps to components
    3. преобразовать class components to stateless components везде, где это возможно
    // complited:
    // cards/answer &&
    // cards/question
    4. make footer and started page
    5. получать title и текущие cards в контейнерных компонентах
    6. в Deck выводить сколько карточек готовы к повторению
    7. Revise: если колво дней === 1 то выводить только одну
    8. Выделять визуально normal
*/
var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactRouterDom.HashRouter, null, _react["default"].createElement(_Header["default"], null), _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        component: _DecksList.DecksList
      }), _react["default"].createElement(_reactRouterDom.Redirect, {
        from: "/decks",
        to: "/"
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/decks",
        component: _DecksList.DecksList
      }), _react["default"].createElement(_reactRouterDom.Route, {
        path: "/deck/:id",
        component: _CardsList.CardsList
      }), _react["default"].createElement(_reactRouterDom.Route, {
        path: "/test/:id",
        component: _TestList.TestList
      }), _react["default"].createElement(_reactRouterDom.Route, {
        path: "/revise/:id",
        component: _ReviseList.ReviseList
      }), _react["default"].createElement(_reactRouterDom.Route, {
        path: "/registration",
        component: function component() {
          return _react["default"].createElement(_ModalRegistration["default"], {
            title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
          });
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        path: "/login",
        component: function component() {
          return _react["default"].createElement(_ModalAuthorization["default"], {
            title: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
          });
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        component: _Whoops["default"]
      })));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports["default"] = _default;