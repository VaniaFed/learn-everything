"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Title = _interopRequireDefault(require("../common/title1/Title"));

var _Submit = _interopRequireDefault(require("./Submit"));

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

var ModalRegistration =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalRegistration, _Component);

  function ModalRegistration(props) {
    var _this;

    _classCallCheck(this, ModalRegistration);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalRegistration).call(this, props));
    _this.login = _react["default"].createRef();
    _this.password = _react["default"].createRef();
    _this.passwordRepeat = _react["default"].createRef();
    _this.state = {
      err: false
    };
    return _this;
  }

  _createClass(ModalRegistration, [{
    key: "register",
    value: function register(e) {
      e.preventDefault();
      var login = this.login.current.value;
      var password = this.password.current.value;
      var passwordRepeat = this.passwordRepeat.current.value;
      console.log(login, password, passwordRepeat);
      var error; // login.length === 0
      //   ? error = 'Вы не заполнили поле логин'
      //   : (password.length === 0) ?
      //     error = 'Вы не заполнили поле пароль' :
      //   (password !== passwordRepeat) ?
      //     error = 'Пароли не совпадают' :
      //     null

      error ? this.setState({
        err: true,
        errText: error
      }) : this.setState({
        err: false,
        errText: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: css.modal_bg
      }, _react["default"].createElement("div", {
        className: css.modalContainer
      }, _react["default"].createElement(_Title["default"], {
        title: this.props.title
      }), _react["default"].createElement("input", {
        className: "".concat(css.modal__input, " ").concat(css.modal__input__text),
        placeholder: "\u041B\u043E\u0433\u0438\u043D",
        ref: this.login
      }), _react["default"].createElement("input", {
        type: "password",
        className: "".concat(css.modal__input, " ").concat(css.modal__input__text),
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        ref: this.password
      }), _react["default"].createElement("input", {
        type: "password",
        className: "".concat(css.modal__input, " ").concat(css.modal__input__text),
        placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        ref: this.passwordRepeat
      }), _react["default"].createElement("p", {
        style: {
          'color': 'red'
        }
      }, this.state.err ? this.state.errText : null), _react["default"].createElement(_Submit["default"], {
        className: "".concat(css.modal__input, " ").concat(css.modal__input__submit),
        value: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",
        onClick: function onClick(e) {
          return _this2.register(e);
        }
      })));
    }
  }]);

  return ModalRegistration;
}(_react.Component);

var _default = ModalRegistration;
exports["default"] = _default;