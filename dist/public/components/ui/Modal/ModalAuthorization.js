"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Submit = _interopRequireDefault(require("./Submit"));

var _Title = _interopRequireDefault(require("../common/title1/Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var css = {};

var ModalAuthorization =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalAuthorization, _Component);

  function ModalAuthorization(props) {
    var _this;

    _classCallCheck(this, ModalAuthorization);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalAuthorization).call(this, props));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.userLogin = _react["default"].createRef();
    _this.userPassword = _react["default"].createRef();
    _this.state = {
      err: false,
      errText: null
    };
    return _this;
  }

  _createClass(ModalAuthorization, [{
    key: "login",
    value: function login(e) {
      e.preventDefault();
      var login = this.userLogin.current.value;
      var password = this.userPassword.current.value;
      console.log(login, password); // let error = ''
      // let errorCode = 0
      // (login.length === 0)
      //   ? error = 'Вы не заполнили поле логин'
      //   : password.length === 0
      //     ? error = 'Вы не заполнили поле пароль'
      //     : null
      //     (error)
      //       ? this.setState({
      //         err: true,
      //         errText: error,
      //         errCode: errorCode
      //       })
      //       : this.setState({
      //         err: false,
      //         errText: '',
      //         errCode: errorCode
      //       })
    }
  }, {
    key: "isError",
    value: function isError() {
      return this.state.err ? 'borderError' : '';
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: css.modal_bg
      }, _react["default"].createElement("div", {
        className: css.modalContainer
      }, _react["default"].createElement(_Title["default"], {
        title: this.props.title
      }), _react["default"].createElement("input", {
        className: "".concat(css.modal__input, " ").concat(css.modal__input__text, " ").concat(css.borderError),
        placeholder: "\u041B\u043E\u0433\u0438\u043D",
        ref: this.userLogin
      }), _react["default"].createElement("input", {
        type: "password",
        className: "".concat(css.modal__input, " ").concat(css.modal__input__text),
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        ref: this.userPassword
      }), _react["default"].createElement("p", {
        style: {
          'color': 'red'
        }
      }, this.state.err ? this.state.errText : null), _react["default"].createElement(_Submit["default"], {
        className: "".concat(css.modal__input, " ").concat(css.modal__input__submit),
        value: "\u0412\u043E\u0439\u0442\u0438",
        onClick: this.login
      })));
    }
  }]);

  return ModalAuthorization;
}(_react.Component);

ModalAuthorization.propTypes = {
  title: _propTypes["default"].string
};
var _default = ModalAuthorization;
exports["default"] = _default;