"use strict";

function Person(name, city) {
  his.name = name;
  this.city = city;

  this.getDetails = function () {
    console.log("Name : " + this.name);
    console.log("residence: " + this.city);
  };
}

Person.prototype.greetmsg = function (mmm) {
  console.log("Greet message" + mmm);
};

Person.prototype.mobile = 9122; //

var per = new Person("Sachin", "Kolkata");
console.log(per); // Person.prototype.GreetMessage = (user)=>
// {
//     console.log("Greet day", user);
// }

per.GreetMessage("Rohan");
module.exports = Person;