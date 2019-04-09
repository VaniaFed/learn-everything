"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestList = void 0;

var _reactRedux = require("react-redux");

var _Test = _interopRequireDefault(require("../ui/test/Test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TestList = (0, _reactRedux.connect)(function (state) {
  return {
    cards: state.cards,
    decks: state.decks
  };
}, null)(_Test["default"]);
exports.TestList = TestList;