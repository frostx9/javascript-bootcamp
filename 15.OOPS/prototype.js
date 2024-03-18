

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

let heroPower = {
  thor: "Hammer"
}

Object.prototype.avanger = function () {        // To Give Access Globally
  console.log("Thor is a part of Avanger team");
}

heroPower.avanger()


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

let name = "ABC    "
let name1 = "DEFF     "

String.prototype.trueLength = function () {
  console.log(`True Length is ${this.trim().length}`);
}

name.trueLength() // 3
"DEFF     ".trueLength() // 4
