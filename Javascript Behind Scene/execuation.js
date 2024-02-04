/**
 * Javascipt is Single Threaded Language
 * Javascipt Execuation Obaject
 * 
 * Excuation Context. 1. Global, 2. Fuctional, 3.Eval
 * 
 * {
 * 
 * } => My Code. Gloval Excuation Context. its referst to  'this' . 
 * 
 * Phase 1 - Global Execuation
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
 *    let result = num1 + num2
 *    return result
 *  }
 * 
 *  let result1 = add(val1, val2)
 *  let result2 = add(20, 40)
 * 
 * 
 * Phase 2 => Memory Store Phase. Line 19 to 22 and 27, 28 (Main)
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
 * val1 - > 10
 * val2 - > 5
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
 * result -> Undefiend
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