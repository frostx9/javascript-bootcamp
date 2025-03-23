// Creating Class
class User {
  constructor(username) {
    this.username = username
  }

  logMe() {  //Linked with User Class Via Prototype Mechanism
    console.log(`Username is ${this.username}`);
  }

}


// Inheritance
// Inheritance is a way to create a new class from an existing class so we can reuse the properties and methods of the existing class
// So we are creting new Teeacher Constructor function, which have now also User Constructor function methos, which in logme() method
class Teacher extends User {
  constructor(username, email, password) {
    super(username)  // Borrow username from User Class
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
