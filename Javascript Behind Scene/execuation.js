/**
 * Javascipt is Single Threaded Language
 * Javascipt Execuation Context
 * 
 * 
 * Excuation Context. 1. Global Excuation Context, 2. Fuctional Excuation Context, 3.Eval Excuation Context
 * 
 * Phase 1 - Global Execuation
 * when we write a code, Gloval Excuation Context made
 * {
 * 
 * } => My Code. Gloval Excuation Context. its referst to  'this' . 
 * 
 * 
 * 
 * Phase 2 - Memory Creation Phase(MCP). Store Variable
 * 
 * Phase 3 - Execuation Phase
 * 
 * Code Example - >
 * 
 *  let val1 = 10
 *  let val2 = 5
 *  
 *  function add(num1, num2){
 *    let total = num1 + num2
 *    return total
 *  }
 * 
 *  let result1 = add(val1, val2)
 *  let result2 = add(20, 40)
 * 
 * 
 * Phase 2 => Memory Store Phase. Line 22, 23, 25, 30, 31
 * 
 * val1 - > Undefiend
 * val2 - > Undefiend
 * add -> Defination
 * result1 -> Undefiend
 * result2 -> Undefiend
 * 
 * 
 * Phase 3 = > Execaution Phase (Main)
 * 
 * val1 - > 10 .. Store Date
 * val2 - > 5 .. Store Date
 * 
 * Now When a function call and he create a New Execuation Context.
 * add => Create a New Execuation Context  [ New Variable Environment + Excuation Thread ]. This will every time when add() function call.
 * when this new sandbox create again Phase 2 and Phase 3 will run in that sandbox for this add() function
 * 
 * For let result1 = add(val1, val2) . 1 st New Sandbox
 * 
 * Phase 2 => Memory Phase
 * 
 * val1 - > Undefiend
 * val2 - > Undefiend
 * total -> Undefiend
 * 
 * Phase 3 = > Execaution Phase
 * 
 * num1 = 10
 * num2  = 5
 * total = 15 -> Retrun to Execautional Global Scope
 * 
 * After finish This 1st Execuation Context will Be Delete
 * 
 * Phase 3 = > Execaution Phase (Main)
 * result1 = 15
 * 
 * For let result2 = add(20, 40) . 2 nd New Sandbox
 * 
 * Phase 2 => Memory Phase
 * 
 * val1 - > Undefiend
 * val2 - > Undefiend
 * result -> Undefiend
 * 
 * Phase 3 = > Execaution Phase
 * 
 * num1 = 20
 * num2  = 40
 * total = 60 -> Retrun to Execautional Global Scope
 * 
 * After finish This 1st Execuation Context will Be Delete
 * 
 * Phase 3 = > Execaution Phase (Main)
 * result2 = 60
 * 
 * 
 *  
 */

// Example 1
function one() {
  console.log("One")

}

function two() {
  console.log("Two")

}

function three() {
  console.log("Three")
}

one()
two()
three()

// Example 2
function one() {
  console.log("One")
  two()

}

function two() {
  console.log("Two")
  three()
}

function three() {
  console.log("Three")
}

one()
two()
three()