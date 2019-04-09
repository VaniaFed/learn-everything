"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecksList = void 0;

var _reactRedux = require("react-redux");

var _Decks = _interopRequireDefault(require("../ui/decks/Decks"));

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DecksList = (0, _reactRedux.connect)(function (state) {
  return {
    cards: state.cards,
    decks: state.decks
  };
}, function (dispatch) {
  return {
    onDelete: function onDelete(deckId) {
      dispatch((0, _actions.removeDeck)(deckId));
      dispatch((0, _actions.removeCardsByDeckId)(deckId));
    },
    onAdd: function onAdd() {
      dispatch((0, _actions.addDeck)());
    }
  };
})(_Decks["default"]);
exports.DecksList = DecksList;