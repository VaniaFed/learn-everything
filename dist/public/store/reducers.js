"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decks = exports.cards = exports.user = void 0;

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants["default"].CHANGE_USERNAME:
      {
        var userName = action.userName;
        return _objectSpread({}, state, {
          userName: userName
        });
      }

    default:
      return state;
  }
};

exports.user = user;

var card = function card() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants["default"].ADD_CARD:
      {
        var id = action.id,
            question = action.question,
            answer = action.answer,
            datePrevRevise = action.datePrevRevise,
            dateNextRevise = action.dateNextRevise,
            deckId = action.deckId;
        return {
          id: id,
          question: question,
          answer: answer,
          datePrevRevise: datePrevRevise,
          dateNextRevise: dateNextRevise,
          deckId: deckId
        };
      }

    case _constants["default"].CHANGE_QUESTION:
      {
        var _question = action.question;
        return _objectSpread({}, state, {
          question: _question
        });
      }

    case _constants["default"].CHANGE_ANSWER:
      {
        var _answer = action.answer;
        return _objectSpread({}, state, {
          answer: _answer
        });
      }

    case _constants["default"].CHANGE_DATE_REVISE:
      {
        var _datePrevRevise = action.datePrevRevise,
            _dateNextRevise = action.dateNextRevise;
        return _objectSpread({}, state, {
          datePrevRevise: _datePrevRevise,
          dateNextRevise: _dateNextRevise
        });
      }

    default:
      return state;
  }
};

var cards = function cards() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants["default"].ADD_CARD:
      return [].concat(_toConsumableArray(state), [card({}, action)]);

    case _constants["default"].REMOVE_CARD:
      {
        var id = action.id;
        return state.filter(function (card) {
          return card.id !== id;
        });
      }

    case _constants["default"].CHANGE_QUESTION:
      {
        var _id = action.id;
        return state.map(function (oneCard) {
          return oneCard.id === _id ? card(oneCard, action) : oneCard;
        });
      }

    case _constants["default"].CHANGE_ANSWER:
      {
        var _id2 = action.id;
        return state.map(function (oneCard) {
          return oneCard.id === _id2 ? card(oneCard, action) : oneCard;
        });
      }

    case _constants["default"].CHANGE_DATE_REVISE:
      {
        var _id3 = action.id;
        return state.map(function (oneCard) {
          return oneCard.id === _id3 ? card(oneCard, action) : oneCard;
        });
      }

    case _constants["default"].REMOVE_CARDS_BY_DECK_ID:
      {
        var deckId = action.deckId;
        return state.filter(function (card) {
          return card.deckId !== deckId;
        });
      }

    default:
      return state;
  }
};

exports.cards = cards;

var deck = function deck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants["default"].ADD_DECK:
      {
        var id = action.id,
            title = action.title,
            quantityCards = action.quantityCards;
        return {
          id: id,
          title: title || 'untitled',
          quantityCards: quantityCards
        };
      }

    case _constants["default"].RENAME_DECK:
      {
        var newDeckName = action.newDeckName;
        return _objectSpread({}, state, {
          title: newDeckName
        });
      }

    default:
      return state;
  }
};

var decks = function decks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      id = action.id;

  switch (type) {
    case _constants["default"].ADD_DECK:
      return [].concat(_toConsumableArray(state), [deck({}, action)]);

    case _constants["default"].RENAME_DECK:
      {
        return state.map(function (oneDeck) {
          return oneDeck.id === id ? deck(oneDeck, action) : oneDeck;
        });
      }

    case _constants["default"].REMOVE_DECK:
      return state.filter(function (oneDeck) {
        return oneDeck.id !== id;
      });
    // TODO: нужно также удалить все карточки, ссылающиеся на deck

    default:
      return state;
  }
};

exports.decks = decks;