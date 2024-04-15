// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is An Object

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected. Working Stage
fulfilled: meaning that the operation was completed successfully. Return the desire data
rejected: meaning that the operation failed.

*/

// Why use =>
// Do An Async Task
// Db Call, cryptography, network

// Create Promise

// Type 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Is Complete 1");
    resolve()  // To Connect with resolve and then
  }, 1000)

})

// .then() => Resolve
promiseOne.then(() => {
  console.log("Promise is Consumed 1");
})


// Type 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Is Complete 2");
    resolve()
  }, 2000)
}).then(() => {
  console.log("Promise is Consumed 2");
})

// Type 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Is Complete ");
    resolve({ name: "Saumya", designation: "SDE1" }) // Passing Data
  }, 3000)
})

promiseThree.then((user) => {
  console.log(user);
})


// Type 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ name: "Saumya", designation: "SDE1" })
    } else {
      reject("Error: Something Went Wrong")
    }
  }, 4000)
})

// .catch() => Reject
promiseFour.then((user) => {
  return user.designation
}).then((des) => {
  console.log(des);
}).catch((error) => {
  console.log(error);
}).finally(() => console.log("The Promise Is Either Resolve Or Reject"))


// Promise With Fetch
fetch('https://randomuser.me/api')
  .then((resposne) => {
    return resposne.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Done All"))