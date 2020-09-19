names=['Ram','Tom','Raju'];
names.forEach((elem,index,arr) => {
    console.log(elem);
});

(function greet(){               // IIFE immediately invoke function
    console.log('Great day!'); //enclose with () and call with ()
})();

(function (user){               // IIFE immediately invoke function expression
    console.log('Great day!',user); //enclose with () and call with ()
})('JuNNu');

var greet1 = function(){
    console.log('great day');
}

var greet2 = ()=>{
    console.log('Great DAY!');
}
