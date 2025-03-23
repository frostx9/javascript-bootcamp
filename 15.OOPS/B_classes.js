//Constructor Function 
// Object Oriented Programming / OOP : Main Moto Is To Ability To Create Object
// In JS , 'Context' is to refer an Object. Within Object this keyword refers to that object
function Car(name, model) {
  if (!new.target) {
    throw new Error("You must use new keyword")
  }
  this.name = name;
  this.model = model;
}

let mycar = new Car("Honda", "Civic");
console.log(mycar);


// Function With Prototype
function OldUser(username, email, password) {  // It IS A Function Which Create Object
  this.username = username
  this.email = email
  this.password = password
}

// We Linked OldUser function With encrypt function Via Prototype Mechanism
// Borrowing OldUser Function using Prototype keyword to the encrypt function
OldUser.prototype.encrypt = function () {
  return `${this.password}abc`
}

OldUser.prototype.changeUserName = function () {
  return this.username.toUpperCase()
}

let firstUser = new OldUser("anon", "abc@gmail.com", 456)
console.log(firstUser.encrypt());
console.log(firstUser.changeUserName())



// With Class
class User {
  constructor(username, email, password) {   // Create constructor function object
    this.username = username
    this.email = email
    this.password = password
  }

  encrypt() {
    return `${this.password}abc`
  }

  changeUserName() {
    return this.username.toUpperCase()
  }
}

const user1 = new User("abc", "abc@gmail.com", 123)

console.log(user1.encrypt());
console.log(user1.changeUserName());






