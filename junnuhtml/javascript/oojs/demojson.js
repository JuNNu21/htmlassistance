var stud ={
    name:'Ram',
    empId:20,
    hobbies:['music','guitar'],
    address:{
    city:'ban',state:'KAR'
}
}
var jsonstring = JSON.stringify(stud);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj);