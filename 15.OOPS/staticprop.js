// Prop = Properties

class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createID() {  // Dont give Access all time
    return `123`
  }

}

const user1 = new User("ABC")
