// forEach - Its an array method
// it Doest return any array

const num = [1,2,3,4,5,6,7,8]

 num.forEach((x)=>{      // x represent each value of array in looping
  console.log( x * 2);
}) 

// Answer = 2 4 6 8 10 12 14 16

// forEach(x , i) = forEach second paramete alwayis index number. It is Optional

num.forEach((x , i)=>{      // x represent each value of array in looping
  console.log(`${i} : ${x}`);
}) 
