names=['Ram','Tom','Raju'];
names.forEach((elem,index,arr) => {
    console.log(elem);
});

(function greet(){               // IIFE immediately invoke function
    console.log('Great day!'); //enclose with () and call with ()
})();

(function (user){               // IIFE immediately invoke function
    console.log('Great day!',user); //enclose with () and call with ()
})('JuNNu');

setTimeout(()=> {
    console.log('This is a demo')
},3000);
setInterval(() => {
    console.log('Blink')
}, 3000);