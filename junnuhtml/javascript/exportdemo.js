var Person = require('./person');

var person = new Person('Ram','BLR');
person.getDetails();
person.greetmsg('hola');
console.log(person.mobile);

person.sendMsg = function(){
    console.log('bye bye');
}
person.sendMsg();

var person1 = new Person('TOM','MYS');
person.getDetails();
person.greetmsg('holy');