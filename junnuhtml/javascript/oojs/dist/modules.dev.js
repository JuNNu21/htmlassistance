"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divideAll = exports.message = exports.sumAll = exports.msg = exports.greet = void 0;

var greet = function greet() {
  return console.log("Hello World");
};

exports.greet = greet;
var msg = 'hello';
exports.msg = msg;

var sumAll = function sumAll(a, b) {
  return a + b;
};

exports.sumAll = sumAll;
var message = 'Great day';
exports.message = message;

var divideAll = function divideAll(a, b) {
  return a / b;
};

exports.divideAll = divideAll;

var multiplyAll = function multiplyAll(a, b) {
  return a * b;
};

var findModulus = function findModulus(a, b) {
  return a % b;
};