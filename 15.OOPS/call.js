function setUserName(username) {
  // Complex Db Call
  this.username = username
}

function createUser(username, email, password) {

  setUserName.call(this, username) // .call ... To Hold Refernce of setUserName() function
  // this.username = username ... This line outsource to setUserName() fucntion


  this.email = email
  this.password = password

}

const func = new createUser("ABC", "abc@fb.com", "1234")
console.log(func);