let newarr = [90,20,110,50,60]; 
console.log(Math.max(newarr));// returns NaN
console.log(Math.max(90,20,110,50,60));//110


//spreading the array
//turns the array into list of values
//spread operator
console.log(Math.max(...newarr)); 

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); 

//can be combined with other values
console.log( Math.max(10,...arr1,20, ...arr2) );


let msg="Hello";
console.log(...msg);

'Spring in action'
// 'javascript'

var sumfun = function(a,b,c){
    console.log(a+b+c);
}
sumfun(...[10,20,30]);

var greet = function(a,b,c){
    console.log(a+b+c);
}



//-----------------------------------------

// count in javascript
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('learning javascript', 'a'));

