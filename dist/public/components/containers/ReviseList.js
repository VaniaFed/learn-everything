"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviseList = void 0;

var _reactRedux = require("react-redux");

var _Revise = _interopRequireDefault(require("../ui/revise/Revise"));

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReviseList = (0, _reactRedux.connect)(function (state) {
  return {
    cards: state.cards,
    decks: state.decks
  };
}, function (dispatch) {
  return {
    onChangeDateRevise: function onChangeDateRevise(id, prevDate, nextDate) {
      dispatch((0, _actions.changeDateRevise)(id, prevDate, nextDate));
    }
  };
})(_Revise["default"]);
exports.ReviseList = ReviseList;