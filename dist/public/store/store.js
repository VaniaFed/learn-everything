"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducers = require("./reducers");

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  user: _reducers.user,
  decks: _reducers.decks,
  cards: _reducers.cards
}), localStorage['redux-learn-everything'] ? JSON.parse(localStorage['redux-learn-everything']) : {});
store.subscribe(function () {
  localStorage['redux-learn-everything'] = JSON.stringify(store.getState());
  console.log(store.getState());
});
var _default = store;
exports["default"] = _default;