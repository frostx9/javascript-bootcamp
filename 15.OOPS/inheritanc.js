class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`New Course Added by ${this.username}`);
  }
}

const user1 = new Teacher('Abc', 'chai@gmail.com', 123)

user1.logMe()
user1.addCourse()
