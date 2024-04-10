// Object Literal - Its Just a Object how we delcare

const user = {
  name: "ABC",
  getDetails: function () {
    console.log(`My Name is ${this.name}`);  // this keyword work only currnt context / scope
  }
}

// Function In Object
console.log(user.getDetails()); // My Name is ABC



// Constructor Function => new keyword create a constructor function . Create Multipale Instances / new copy from one object litteral / Context

function User(username, isLoggedin) {
  this.username = username
  this.isLoggedin = isLoggedin

  return this
}


// With Out constructor function

const userOne = User("ABC", true)
const userTwo = User("CDE", false)

console.log("With Out", userOne);  // Result will be  username: 'CDE', isLoggedin: false. It Overwrite Previos Data.
/*
Explain - It  happednd because when we call userOne , in line 28 User() function data replace by "CDE", false. Because Javascript execute line by line 
*/

// With constructor function

const userThree = new User("DEF", true) // Copy Of User Function
const userFour = new User("GHI", false) // Copy Of User Function

console.log("User Three", userThree) // Result User { username: 'DEF', isLoggedin: true }
console.log("User Four", userFour) // Result User { username: 'GHI', isLoggedin: false}

console.log(userThree.constructor) // [Function: User]
console.log(userThree instanceof User) // true
