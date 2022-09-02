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
 * 
 *  (function teacer(){
 *  let name = "Kyle"
 *  console.log(name)
 *  }) () // ()..tels that execuated function immeditely after describe....Best work with var 
 * 
 */

// Explicit Binding 
function ask(question){
  console.log(this.teacher, question);
}
function otherClass(){
  let teacher = {
    teacher : "Kyle"
  }

  ask.call(teacher, "why?")
}
otherClass()
