"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doubleDate = void 0;

var doubleDate = function doubleDate(date) {
  return date < 10 ? "0".concat(date) : date;
};

exports.doubleDate = doubleDate;