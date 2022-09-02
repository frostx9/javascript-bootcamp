// Function Scope
// In Here myNmae is in function scope...cant acess this vareaible outside the function
function getMyName() {
  const myName = "ABC DEF"
  console.log(myName);
}

getMyName()

// Nested Function
function outer(){
  let hero = "Black Pamther"

  function inner(){
    let help = `${hero}, Hello`
    console.log(help);
  }
  inner()
}

outer()
console.dir() // 

// In Javascript Function are object

const add = function(x,y){
  return x+y
}

const sub = function(x,y){
  return x-y
}

// In here we store the function name array and later use it 
const arr = [add,sub]

for(let func of arr){
  let result = func(20,8)
  console.log(result);
}

// Strore In Object.. This is example creating method. Like = .toUpperCase(). In here .Addition()

const math = {  
  Addition : add,
  Subtraction : sub
}

console.log(math.Addition(10,2))
console.log(math.Subtraction(10,2))

// Higher Order Function = Its mean Accept other fuction as an argument or return as a function
//Accept other fuction as an argument
function call(calll){
  calll() // call the luagh() function twice... in here call() meaning calling laugh() function
  calll()
}

function laugh(){
  console.log("Haha...You are Funny");
}

call(laugh)

//Return as a function
function multi(num){
  return function(x){
    return num * x
  }
}

const triple = multi(5) // This call meaning const triple =  function (x) { return 5 * x} 
console.log(triple(2)); // This call meaning function (x) { return 5 * 2}

// Example :-

function makeBetween (a,b){
  return function (age){
    if (age > a && age < b) return true
    return false
    
  }
}

const isChild = makeBetween(0,18)
console.log(isChild(15));

// Callback
// We pass a function to another function as an argument and its execuated..it called callback

//Hoisting ... it problemes with var keywawod

var animal = "Dog"
console.log(animal); // Result Dog

console.log(newAnimal);
var newAnimal = "Dog" // Result Undefined
/*
so it means when javascipt see var keyword , it will run first..put ont the top. So var animal will run fast, then it will be assigned with value

var animal
console.log(animal)
animal = "Dog"

*/
