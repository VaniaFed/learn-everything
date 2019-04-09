"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Card = _interopRequireDefault(require("./Card/Card"));

var _NoOneCards = _interopRequireDefault(require("../common/noOneCards/NoOneCards"));

var _time = require("../../../lib/time");

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

var Revise =
/*#__PURE__*/
function (_Component) {
  _inherits(Revise, _Component);

  function Revise(props) {
    var _this;

    _classCallCheck(this, Revise);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Revise).call(this, props));
    var id = props.match.params.id;
    var cardsToRevise = props.cards.filter(function (card) {
      return card.deckId === id && new Date().getTime() >= new Date(card.dateNextRevise).getTime();
    });
    _this.state = {
      cards: cardsToRevise,
      isPressedCheck: false
    };
    _this.checkAnswer = _this.checkAnswer.bind(_assertThisInitialized(_this));
    _this.calcAndGetNextDates = _this.calcAndGetNextDates.bind(_assertThisInitialized(_this));
    _this.handleChoiceLevel = _this.handleChoiceLevel.bind(_assertThisInitialized(_this));
    _this.handleCheckAnswer = _this.handleCheckAnswer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Revise, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextState) {
      return this.state.cards !== nextState.cards || this.state.isPressedCheck !== nextState.isPressedCheck;
    }
  }, {
    key: "handleChoiceLevel",
    value: function handleChoiceLevel(level, card) {
      // FIXME:
      // вменсто того, чтобы извлекать по отдельности y, m и d из Date, лучше создать f() возвращающую `${y}.${m}.${d}`
      var datePrevRevise = card.datePrevRevise,
          dateNextRevise = card.dateNextRevise;
      var difference = this.datesDifference(datePrevRevise, dateNextRevise);
      var daysToNextRevise = this.howManyDaysLeftToNextRevise(level, difference);
      var y = new Date().getFullYear();
      var m = (0, _time.doubleDate)(new Date().getMonth() + 1);
      var d = (0, _time.doubleDate)(new Date().getDate());
      var currentDate = "".concat(y, ".").concat(m, ".").concat(d);
      var newDateNextRevise = this.currentDatePlusDifference(currentDate, daysToNextRevise);

      if (level !== 'forget') {
        this.props.onChangeDateRevise(card.id, currentDate, newDateNextRevise);
        var nextState = this.state.cards.filter(function (stateCard) {
          return stateCard.id !== card.id;
        });
        this.setState({
          cards: nextState
        });
      }

      this.nextCard(); // TODO:
      // осталось сделать проверку при выводе карточки и выводить дате следующего повторения =))))
    }
  }, {
    key: "handleCheckAnswer",
    value: function handleCheckAnswer(prevDate, nextDate) {
      this.checkAnswer();
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer() {
      this.setState({
        isPressedCheck: !this.state.isPressedCheck
      });
    }
  }, {
    key: "nextCard",
    value: function nextCard() {
      this.setState({
        isPressedCheck: !this.state.isPressedCheck
      });
    }
  }, {
    key: "datesDifference",
    value: function datesDifference(prevDate, nextDate) {
      var date1 = new Date(prevDate);
      var date2 = new Date(nextDate);
      var secondsInDay = 1000 * 3600 * 24;
      return Math.abs(Math.ceil((date2.getTime() - date1.getTime()) / secondsInDay));
    }
  }, {
    key: "howManyDaysLeftToNextRevise",
    value: function howManyDaysLeftToNextRevise(level, difference) {
      var dayNextRevise = 0;

      switch (level) {
        case 'forget':
          dayNextRevise = 0;
          console.log('forget');
          break;

        case 'difficult':
          console.log('difficult');
          dayNextRevise = difference + 1;
          break;

        case 'normal':
          dayNextRevise = difference * 2 + 1;
          console.log('normal');
          break;

        case 'easy':
          dayNextRevise = difference * 3 + 1;
          console.log('easy');
          break;

        default:
          break;
      }

      return dayNextRevise;
    }
  }, {
    key: "currentDatePlusDifference",
    value: function currentDatePlusDifference(currentDate, dayNextRevise) {
      var secondsInDay = 1000 * 3600 * 24;
      var currentDateInSeconds = new Date(currentDate).getTime();
      var sumDates = currentDateInSeconds + dayNextRevise * secondsInDay;
      var newDate = new Date(sumDates);
      var y = newDate.getFullYear();
      var m = (0, _time.doubleDate)(newDate.getMonth() + 1);
      var d = (0, _time.doubleDate)(newDate.getDate());
      var calculatedDate = "".concat(y, ".").concat(m, ".").concat(d);
      return calculatedDate;
    }
  }, {
    key: "calcPotentialNextDates",
    value: function calcPotentialNextDates(difference) {
      return {
        forget: 0,
        difficult: difference + 1,
        normal: difference * 2 + 1,
        easy: difference * 3 + 1
      };
    }
  }, {
    key: "calcAndGetNextDates",
    value: function calcAndGetNextDates(prevDate, nextDate) {
      var difference = this.datesDifference(prevDate, nextDate);
      var nextDates = this.calcPotentialNextDates(difference);
      return nextDates;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          decks = _this$props.decks,
          match = _this$props.match,
          history = _this$props.history;
      var handleChoiceLevel = this.handleChoiceLevel,
          handleCheckAnswer = this.handleCheckAnswer,
          calcAndGetNextDates = this.calcAndGetNextDates;
      var _this$state = this.state,
          cards = _this$state.cards,
          isPressedCheck = _this$state.isPressedCheck;
      var deckId = match.params.id;
      var currentDeck = decks.find(function (deck) {
        return deck.id === deckId;
      });
      return _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("main", {
        className: css.rememberContainer
      }, _react["default"].createElement(_Title["default"], {
        className: css.remember__title,
        content: currentDeck.title
      }), cards.length > 0 ? _react["default"].createElement(_Card["default"], {
        question: cards[0].question,
        answer: cards[0].answer,
        nextDates: calcAndGetNextDates(cards[0].datePrevRevise, cards[0].dateNextRevise),
        onCheckAnswer: handleCheckAnswer,
        isPressedCheck: isPressedCheck,
        onChoiceLevel: function onChoiceLevel(level) {
          return handleChoiceLevel(level, cards[0]);
        }
      }) : _react["default"].createElement(_NoOneCards["default"], {
        textMsg: "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.",
        comeBack: history.goBack
      })));
    }
  }]);

  return Revise;
}(_react.Component);

var _default = Revise;
exports["default"] = _default;