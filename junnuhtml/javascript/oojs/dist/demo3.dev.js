"use strict";

names = ['Ram', 'Tom', 'Raju'];
names.forEach(function (elem, index, arr) {
  console.log(elem);
});

(function greet() {
  // IIFE immediately invoke function
  console.log('Great day!'); //enclose with () and call with ()
})();

(function (user) {
  // IIFE immediately invoke function
  console.log('Great day!', user); //enclose with () and call with ()
})('JuNNu');

var greet1 = function greet1() {
  console.log('great day');
};

var greet2 = function greet2() {
  console.log('Great DAY!');
};