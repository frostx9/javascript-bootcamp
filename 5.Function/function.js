// In here a and b are parameter....2 and 3 are argument

function add(a, b) {
  const sum = a + b
  console.log(sum)
}

add(2, 3)

// Return multipale value

function multi(x) {
  const mult = x * x
  const add = x + x

  return { mult, add }
}

console.log(multi(3))

// Return in if condtion

function isPurpale(color) {
  if (color === "Purpale") return true
  return false
}

console.log(isPurpale("Black"))

  // IIFE = Immediately Invoked Function Expression
  /**
   *  To Prevent Global Scope Varaiable Polution
   * ; -> To End IFFE function. To End Context
   */
  (function iffEfunc() {  // Named IFFE Function
    console.log("Hello World");
  })();

((name) => {  // IFFE Function
  console.log(`Hello ${name}`);
})('FROST');



// Explicit Binding 
function ask(question) {
  console.log(this.teacher, question);
}
function otherClass() {
  let teacher = {
    teacher: "Kyle"
  }

  ask.call(teacher, "why?")
}

otherClass()

//     otherClass                 ()
// Function Refernece     Function Execuation

// Fucntion With Rest Operator

function calculate(...num) {
  return num
}

calculate(100, 200, 300) // Ans [100, 200, 300]


// Arrow Function - Implicit Retrun Object
const arrowFunc = () => { { username: "Hello" } }
console.log(arrowFunc);



// High Order Fucntion / First Class Fucntion
/**
 * When A function is passed as an argument to another function. Its Called High Order Fucntion
 * Example : ForEach loop Is a type of High Order Fucntion
 * 
 * forEach(()=>{
 * })
 */

//Accept other fuction as an argument
function call(calll) {
  calll() // call the luagh() function twice... in here call() meaning calling laugh() function
  calll()
}

function laugh() {
  console.log("Haha...You are Funny");
}

call(laugh)