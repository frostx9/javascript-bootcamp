
// Access Prototype
const computer = { cpu: 12 }
console.log("CPU", computer.__proto__); // __ :- This Call Dunder Method

// Accessing Prototype
const lenovo = {
  ram: 16,
  __proto__: computer
}

console.log("CPU", lenovo.__proto__);

// Behind the Scene
/**
 * When We Declare A Object , and we assign value to the object. It Does Not Direct Access
 * Between Object and value,  It Access Through Prototype 
 * So In here when we werite lenovo.__proto__ , it goes to the computer prototype and access the value
 * 
 */

// Modern Way
const genericCar = {
  tyre: 4,
  engine: 1
}

const tesla = {
  driver: "Elon Musk",
}

// Object To Obejct Only
Object.setPrototypeOf(tesla, genericCar) // genericCar object proprties Injected To The tesla Object
console.log("Tesla", Object.getPrototypeOf(tesla)); // Accessing The Injected Properties
console.log("Tesla", tesla.hasOwnProperty("tyre")); // HasOwnProperty Check Property In Object its own Properties or Linked From Other Properties


// Demo Function
function multi(x) {
  return x * 5
}

multi.power = 2

console.log(multi(5)) // 25
console.log(multi.power) // 2
console.log(multi.prototype) // {}
// Evrything in javascript is an object. Function is a function. Fucntion is also object


function createUser(username, score) {
  this.username = username
  this.score = score
}

createUser.prototype.increment = function () {  // Fucntion is a object. So we can inject addtinal feture like we can addtioanl value in object
  this.score++
}

createUser.prototype.print = function () {
  console.log(`New score is ${this.score}`);
}


const user1 = new createUser("ABC", 25)  // mew keyword use because to tell I add some addtinal fetaure like increment, score
const user2 = new createUser("ABC", 30)

user1.print()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this
is bound to the newly created object. If no explicit return value is specified from the constructor,
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Protoype
// Object Prototype
let heroPower = {
  thor: "Hammer"
}

Object.prototype.avanger = function () {        // To Give Access Globally
  console.log("Thor is a part of Avanger team");
}

heroPower.avanger()

// Array Prototype
// Custom Array Prototype. It Inject This Properties Globally in Array 
Array.prototype.customMap = function () {
  return `Custom Map ${this}`
}

let customArray1 = [1, 2, 3, 4]
console.log(customArray1.customMap())

let customArray2 = [1, 2, 3, 4, 5]
console.log(customArray2.customMap())

// String Prototype
// Custom String Prototype
String.prototype.trueLength = function () {
  console.log(`True Length is ${this.trim().length}`);
}

let name = "ABC    "
let name1 = "DEFF     "

name.trueLength() // 3
"DEFF     ".trueLength() // 4


// Inheritance
const user = {
  name: "ABC"
}

const Teacher = {
  makeVidoe: true
}

const TeachingSupport = {
  isAvailable: false
}

const TaSupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport    // To Linked Two Object Between TeachingSupport and TaSupport . Out Dated
}

Teacher.__proto__ = user  // Another Way. Out Dated

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



// Encapsulation
//Restriction Of Direct Access To Object Properties

class bankAccount {
  #balance = 0 // Disabled Direct Access

  deposit(amount) {
    this.#balance += amount  // We can Access The balance data still into the calss, but not outsid
    return this.#balance
  }

  getBalance() {
    return `$ ${this.#balance}`
  }
}

const myAccount = new bankAccount()
// myAccount.balance = 100 // Not Allowed
myAccount.deposit(100)
console.log(myAccount.getBalance());



// Abstraction
// Hidening Of Implementation Details
