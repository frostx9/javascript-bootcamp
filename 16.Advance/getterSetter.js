// Getter Setter

class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  // Overwrite the password value manually by using Getter Setter
  get password() {
    return `${this._password.toUpperCase()}demo`
  }

  set password(value) {
    this._password = value
  }
}

const user1 = new User("abc@gmail.com", "abvcd")
console.log(user1.password);