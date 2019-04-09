"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CardsNav = _interopRequireDefault(require("./cardsNav/CardsNav"));

var _CardsContainer = _interopRequireDefault(require("./CardsContainer/CardsContainer"));

var _Button = _interopRequireDefault(require("../common/button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import PropTypes from 'prop-types'
var css = {};

var Cards = function Cards(_ref) {
  var cards = _ref.cards,
      decks = _ref.decks,
      match = _ref.match,
      onDelete = _ref.onDelete,
      onAdd = _ref.onAdd,
      onRenameDeck = _ref.onRenameDeck,
      onChangeQuestion = _ref.onChangeQuestion,
      onChangeAnswer = _ref.onChangeAnswer;
  var id = match.params.id;
  var currentDeck = decks.find(function (deck) {
    return deck.id === id;
  });
  var currentCards = cards.filter(function (card) {
    return card.deckId === id;
  });
  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("input", {
    className: css.input_deck_name,
    defaultValue: currentDeck.title,
    type: "text",
    onBlur: function onBlur(e) {
      var newName = e.target.value;
      onRenameDeck(id, newName);
    }
  }), _react["default"].createElement(_CardsNav["default"], {
    deckId: id
  }), _react["default"].createElement(_CardsContainer["default"], {
    onDelete: onDelete,
    cards: currentCards,
    deckId: id,
    onChangeQuestion: onChangeQuestion,
    onChangeAnswer: onChangeAnswer
  }), _react["default"].createElement(_Button["default"], {
    className: "default-btn default-btn-margin",
    content: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
    onClick: function onClick() {
      return onAdd(id);
    }
  }));
};

var _default = Cards;
exports["default"] = _default;