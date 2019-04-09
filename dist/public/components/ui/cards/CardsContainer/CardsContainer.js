"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = _interopRequireDefault(require("../row/Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var css = {};

var CardsContainer = function CardsContainer(_ref) {
  var _ref$cards = _ref.cards,
      cards = _ref$cards === void 0 ? [] : _ref$cards,
      _ref$deckId = _ref.deckId,
      deckId = _ref$deckId === void 0 ? -1 : _ref$deckId,
      _ref$onDelete = _ref.onDelete,
      _onDelete = _ref$onDelete === void 0 ? function (f) {
    return f;
  } : _ref$onDelete,
      _onChangeQuestion = _ref.onChangeQuestion,
      _onChangeAnswer = _ref.onChangeAnswer;

  return _react["default"].createElement("div", {
    className: css.container
  }, cards.length === 0 ? _react["default"].createElement("h3", null, "\u0422\u0443\u0442 \u043F\u0443\u0441\u0442\u043E. (\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443?)") : cards.map(function (card, i) {
    return _react["default"].createElement(_Row["default"], {
      key: card.id,
      questionText: card.question,
      answerText: card.answer,
      onDelete: function onDelete() {
        return _onDelete(card.id);
      },
      onChangeQuestion: function onChangeQuestion(newQuestion) {
        return _onChangeQuestion(card.id, newQuestion);
      },
      onChangeAnswer: function onChangeAnswer(newAnswer) {
        return _onChangeAnswer(card.id, newAnswer);
      }
    });
  }));
};

CardsContainer.propTypes = {
  cards: _propTypes["default"].array,
  deckId: _propTypes["default"].number,
  onChangeAnswer: _propTypes["default"].func,
  onChangeQuestion: _propTypes["default"].func
};
var _default = CardsContainer;
exports["default"] = _default;