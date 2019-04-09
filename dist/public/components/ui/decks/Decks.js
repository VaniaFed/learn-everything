"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Deck = _interopRequireDefault(require("./Deck/Deck"));

var _Button = _interopRequireDefault(require("../common/button/Button"));

var _propTypes = require("prop-types");

var _Title = _interopRequireDefault(require("../common/title2/Title2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Decks = function Decks(_ref) {
  var _ref$cards = _ref.cards,
      cards = _ref$cards === void 0 ? [] : _ref$cards,
      _ref$decks = _ref.decks,
      decks = _ref$decks === void 0 ? [] : _ref$decks,
      _ref$onDelete = _ref.onDelete,
      _onDelete = _ref$onDelete === void 0 ? function (f) {
    return f;
  } : _ref$onDelete,
      _ref$onAdd = _ref.onAdd,
      onAdd = _ref$onAdd === void 0 ? function (f) {
    return f;
  } : _ref$onAdd;

  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(_Title["default"], {
    content: "\u041A\u043E\u043B\u043E\u0434\u044B"
  }), decks.length > 0 ? _react["default"].createElement("div", null, decks.map(function (deck, i) {
    var currentCards = cards.filter(function (card) {
      return card.deckId === deck.id;
    });
    var quantityCards = currentCards.length;
    return _react["default"].createElement(_Deck["default"], {
      key: deck.id,
      id: deck.id,
      title: deck.title,
      quantity: quantityCards,
      onDelete: function onDelete() {
        return _onDelete(deck.id);
      }
    });
  })) : null, _react["default"].createElement(_Button["default"], {
    className: "default-btn default-btn-margin",
    onClick: function onClick() {
      return onAdd();
    },
    content: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u0434\u0443"
  }));
};

Decks.propTypes = {
  cards: _propTypes.PropTypes.array,
  decks: _propTypes.PropTypes.array,
  onDelete: _propTypes.PropTypes.func,
  onAdd: _propTypes.PropTypes.func
};
var _default = Decks;
exports["default"] = _default;