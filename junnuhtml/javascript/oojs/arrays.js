//sum of numbers in an array
let a= [2,3,5,9]
var sum=0;
for(let val in a){
    sum+=a[val];
    
}
console.log(sum);



//Variable arguments list
sumfun = (...args)=>{
    let sum = 0;
    for(let i in args)
        sum+=args[i];
    console.log(sum);
}
sumfun();
sumfun(10,20);
sumfun(10,20,30);

fun = function(a,b,...args){
    console.log("a",a);
    console.log("b",b);
    console.log(args);

}
fun(1,2,"hello",900);
fun(1);
fun(1,2);

function sumNumbers(...args){
    return args.filter(n=>typeof n==='number')
            .reduce((previous,current)=>previous+current);
}
//console.log(sumNumbers)
//



