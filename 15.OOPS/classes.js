// Class

class User {
  constructor(username, email, password) {
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


// Behind the Scene
function User(username, email, password) {
  this.username = username
  this.email = email
  this.password = password
}

User.prototype.encrypt = function () {
  return `${this.password}abc`
}

User.prototype.changeUserName = function () {
  return this.username.toUpperCase()
}

