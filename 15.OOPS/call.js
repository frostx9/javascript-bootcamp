function setUserName(username) {
  // Complex Db Call
  this.username = username
}

function createUser(username, email, password) {


  // this.username = username ... This line outsource to setUserName() fucntion
  setUserName.call(this, username) // .call ... To Hold Refernce of setUserName() function. first parameter this use . Pass Current Context to another function
  // to say that . dont use setUserName() this , instead use createUser() this to take cutrrent context

  this.email = email
  this.password = password

}

const func = new createUser("ABC", "abc@fb.com", "1234")
console.log(func);