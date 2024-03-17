// Object Literal - Its Just a Object how we delcare

const user = {
  name: "ABC",
  getDetails: function () {
    console.log(`My Name is ${this.name}`);  // this keyword work only currnt context / scope
  }
}

function User(username, isLoggedin) {
  this.username = username
  this.isLoggedin = isLoggedin

  return this // It can be optinal
}


// Constructor Function - ( new )  keyword
// Create Multipale Instances from one object litteral / Context

const userOne = User("ABC", true)
const userTwo = User("CDE", false)

console.log(userOne);  // Result will be  username: 'CDE', isLoggedin: false. It Overwrite Previos Data. Because User Function is One. Second time User func overwrite the 
// First One

const userThree = new User("DEF", true)
const userFour = new User("GHI", false)

console.log(userThree) // Result User { username: 'DEF', isLoggedin: true }
console.log(userThree.constructor) // [Function: User]
console.log(userThree instanceof User) // true
