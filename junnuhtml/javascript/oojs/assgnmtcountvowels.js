//let str= 'averylongword'
//var vowelscount=0;


function vowel_count(str) 
{
 var count = 0;
 var arr = ['a','e','i','o','u']
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) in arr) 
      {
      count += 1;
      }
  }
  return count;
}

console.log(vowel_count('learning javascript'));