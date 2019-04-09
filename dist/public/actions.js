"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDeck = exports.renameDeck = exports.addDeck = exports.changeDateRevise = exports.removeCardsByDeckId = exports.removeCard = exports.changeAnswer = exports.changeQuestion = exports.addCard = exports.changeUserName = void 0;

var _uuid = require("uuid");

var _constants = _interopRequireDefault(require("./constants"));

var _time = require("./lib/time");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var changeUserName = function changeUserName(userName) {
  return {
    type: _constants["default"].CHANGE_USERNAME,
    userName: userName
  };
};

exports.changeUserName = changeUserName;

var addCard = function addCard(deckId) {
  var getDate = function getDate() {
    return new Date();
  };

  var y = (0, _time.doubleDate)(getDate().getFullYear());
  var m = (0, _time.doubleDate)(getDate().getMonth() + 1);
  var d = (0, _time.doubleDate)(getDate().getDate());
  var currentDate = "".concat(y, ".").concat(m, ".").concat(d);
  return {
    type: _constants["default"].ADD_CARD,
    id: (0, _uuid.v4)(),
    question: '',
    answer: '',
    datePrevRevise: currentDate,
    dateNextRevise: currentDate,
    deckId: deckId
  };
};

exports.addCard = addCard;

var changeQuestion = function changeQuestion(id, question) {
  return {
    type: _constants["default"].CHANGE_QUESTION,
    id: id,
    question: question
  };
};

exports.changeQuestion = changeQuestion;

var changeAnswer = function changeAnswer(id, answer) {
  return {
    type: _constants["default"].CHANGE_ANSWER,
    id: id,
    answer: answer
  };
};

exports.changeAnswer = changeAnswer;

var removeCard = function removeCard(cardId) {
  return {
    type: _constants["default"].REMOVE_CARD,
    id: cardId
  };
};

exports.removeCard = removeCard;

var removeCardsByDeckId = function removeCardsByDeckId(deckId) {
  return {
    type: _constants["default"].REMOVE_CARDS_BY_DECK_ID,
    deckId: deckId
  };
};

exports.removeCardsByDeckId = removeCardsByDeckId;

var changeDateRevise = function changeDateRevise(id, datePrevRevise, dateNextRevise) {
  return {
    type: _constants["default"].CHANGE_DATE_REVISE,
    id: id,
    datePrevRevise: datePrevRevise,
    dateNextRevise: dateNextRevise
  };
};

exports.changeDateRevise = changeDateRevise;

var addDeck = function addDeck() {
  return {
    type: _constants["default"].ADD_DECK,
    id: (0, _uuid.v4)(),
    title: 'Untitled Deck',
    quantityCards: 0
  };
};

exports.addDeck = addDeck;

var renameDeck = function renameDeck(id, newDeckName) {
  return {
    type: _constants["default"].RENAME_DECK,
    id: id,
    newDeckName: newDeckName
  };
};

exports.renameDeck = renameDeck;

var removeDeck = function removeDeck(deckId) {
  return {
    type: _constants["default"].REMOVE_DECK,
    id: deckId
  };
};

exports.removeDeck = removeDeck;