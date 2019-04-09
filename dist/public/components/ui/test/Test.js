"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Title = _interopRequireDefault(require("../common/title1/Title"));

var _Row = _interopRequireDefault(require("./row/Row"));

var _Button = _interopRequireDefault(require("../common/button/Button"));

var _NoOneCards = _interopRequireDefault(require("../common/noOneCards/NoOneCards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var css = {};

var Rows = function Rows(_ref) {
  var cardsToPassTest = _ref.cardsToPassTest,
      isPressedCheck = _ref.isPressedCheck,
      _onChangeAnswer = _ref.onChangeAnswer;
  return cardsToPassTest.map(function (card, i) {
    return _react["default"].createElement(_Row["default"], {
      key: i,
      questionText: card.question,
      answerText: card.answer,
      isPressedCheck: isPressedCheck,
      isCorrect: card.isCorrect,
      userAnswer: card.userAnswer,
      onChangeAnswer: function onChangeAnswer(userAnswer) {
        return _onChangeAnswer(card.id, userAnswer);
      }
    });
  });
};

var Test =
/*#__PURE__*/
function (_Component) {
  _inherits(Test, _Component);

  function Test(props) {
    var _this;

    _classCallCheck(this, Test);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Test).call(this, props));
    var id = props.match.params.id;
    var cardsToPassTest = props.cards.filter(function (card) {
      return card.deckId === id;
    });
    _this.state = {
      cards: cardsToPassTest.map(function (card) {
        return _objectSpread({}, card, {
          isCorrect: false,
          userAnswer: ''
        });
      }),
      isPressedCheck: false
    };
    console.log(_this.state);
    _this.checkAnswer = _this.checkAnswer.bind(_assertThisInitialized(_this));
    _this.handleCheckAnswers = _this.handleCheckAnswers.bind(_assertThisInitialized(_this));
    _this.changeAnswer = _this.changeAnswer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Test, [{
    key: "checkAnswer",
    value: function checkAnswer() {
      this.setState({
        isPressedCheck: !this.state.isPressedCheck
      });
    }
  }, {
    key: "handleCheckAnswers",
    value: function handleCheckAnswers() {
      this.checkAnswer();
      this.checkAllAnswers();
    }
  }, {
    key: "isAnswerCorrect",
    value: function isAnswerCorrect(correctAnswer, userAnswer) {
      return correctAnswer.toLowerCase() === userAnswer.toLowerCase();
    }
  }, {
    key: "checkAllAnswers",
    value: function checkAllAnswers() {
      var _this2 = this;

      console.log(this.state.cards);
      var cards = this.state.cards.map(function (card) {
        return _this2.isAnswerCorrect(card.answer, card.userAnswer) ? _objectSpread({}, card, {
          isCorrect: true
        }) : _objectSpread({}, card, {
          isCorrect: false
        });
      });
      this.setState({
        cards: cards
      });
    }
  }, {
    key: "changeAnswer",
    value: function changeAnswer(cardId, userAnswer) {
      this.setState(function (prevState) {
        return {
          cards: prevState.cards.map(function (card) {
            return card.id === cardId ? _objectSpread({}, card, {
              userAnswer: userAnswer
            }) : card;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          decks = _this$props.decks,
          history = _this$props.history;
      var id = this.props.match.params.id;
      var currentDeck = decks.find(function (deck) {
        return deck.id === id;
      });
      var cardsToPassTest = this.state.cards;
      var handleCheckAnswers = this.handleCheckAnswers,
          changeAnswer = this.changeAnswer;
      var isPressedCheck = this.state.isPressedCheck;
      return _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement(_Title["default"], {
        className: css.title,
        content: currentDeck.title
      }), _react["default"].createElement("div", {
        className: css.items
      }, cardsToPassTest.length > 0 ? _react["default"].createElement("div", null, _react["default"].createElement(Rows, {
        cardsToPassTest: cardsToPassTest,
        isPressedCheck: isPressedCheck,
        onChangeAnswer: changeAnswer
      }), _react["default"].createElement(_Button["default"], {
        className: "default-btn-margin",
        content: !isPressedCheck ? 'Check the result' : 'Come back to test',
        onClick: handleCheckAnswers
      })) : _react["default"].createElement(_NoOneCards["default"], {
        textMsg: "Here is no one cards to pass the test",
        comeBack: history.goBack
      })));
    }
  }]);

  return Test;
}(_react.Component);

Test.PropTypes = {
  cards: _propTypes["default"].array.isRequired,
  decks: _propTypes["default"].array.isRequired
};
var _default = Test;
exports["default"] = _default;