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
  calll() // call the luagh() function twice
  calll()
}

function laugh(){
  console.log("Haha...You are Funny");
}

call(laugh)

//Return as a function