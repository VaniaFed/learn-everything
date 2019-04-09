"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsList = void 0;

var _Cards = _interopRequireDefault(require("../ui/cards/Cards"));

var _reactRedux = require("react-redux");

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardsList = (0, _reactRedux.connect)(function (state) {
  return {
    cards: state.cards,
    decks: state.decks
  };
}, function (dispatch) {
  return {
    onAdd: function onAdd(deckId) {
      dispatch((0, _actions.addCard)(deckId));
    },
    onDelete: function onDelete(id) {
      dispatch((0, _actions.removeCard)(id));
    },
    onChangeQuestion: function onChangeQuestion(id, newQuestion) {
      dispatch((0, _actions.changeQuestion)(id, newQuestion));
    },
    onChangeAnswer: function onChangeAnswer(id, newAnswer) {
      dispatch((0, _actions.changeAnswer)(id, newAnswer));
    },
    onRenameDeck: function onRenameDeck(id, newName) {
      dispatch((0, _actions.renameDeck)(id, newName));
    }
  };
})(_Cards["default"]);
exports.CardsList = CardsList;