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

setTimeout(function () {
  console.log('This is a demo');
}, 3000);
setInterval(function () {
  console.log('Blink');
}, 3000);