// Arrow Function
// Syntax - ()=>

const square = (x)=>{
  return x * x
}

// Or

const square1 = x => {return x * x}  // One line if one parameter

console.log(square(3));
// Result 9

// Arrow Function Implcait Return.. When a function have single expression then u dont have to write retrun keyword (Optional)

const add = n => n + n

console.log(add(2));

//Example - 

const arr = [1,2,4,5,6,7,8,9]

const parList = arr.map((n)=>{
  if(n % 2 === 0) return "Even"
  return "Odd"
})

console.log(parList);

// One Line
const parList1 = arr.map((n)=> n % 2 === 0 ?  "Even" : "Odd" )

console.log(parList1);
