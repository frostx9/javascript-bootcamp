// forEach - Its an array method
// It Create a new array and retrun new array, aftart execuation
// Its not change origianl array

const num = [1,2,3,4,5,6,7,8]

const result = num.map((x)=>{
  return x * x
})

console.log(result);

/*
Result = [
   1,  4,  9, 16,
  25, 36, 49, 64 
]

*/

const chkEven = num.map((x)=>{
  return {
    value: x,
    isEven : x % 2 ==0
  }
})

console.log(chkEven);

// word.toUpperCase().split("").join(".")