// Async With Then - Catch (Normal Promise)

async function getData() {   // Always Return Promise
  return "Async Await"
}

const data = getData()
data
  .then((data) => {
    console.log(data);
  })


const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is Resolved")
  }, 10000)
})

// Normal Promise

function promiseOne() {
  p.then(data => console.log(data))
  console.log("Normal Promise");
}

// promiseOne()
/*' Normal Promise ' will be prited first then after 10 sec promise will be resolved and printed ' Promise is Resolved '
Javascript first read line 25 and registered the promise into another call back stack and the read line 26 and print immediate 
After 10 sec promise will be resolved and print 25 line */



// Promise with Async-Await

async function promiseOneAsync() {
  const val = await p
  console.log("Promise with Async-Await");
  console.log(val);
}

// promiseOneAsync()
/*
In here Javascript will be w8 in line 37 for promise to resolved and after 10 sec when promise is resolve  "Promise with Async-Await" and "Promise is Resolved"
will be print toghter
*/




// More Deep Dive In Async-Await

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is Resolved After 10 Sec")
  }, 10000)
})


const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is Resolved after 5 Sec")
  }, 5000)
})


async function promiseTwoAsync() {
  const val = await p1
  console.log("Promise with Async-Await 2");
  console.log(val);

  const val1 = await p2
  console.log("Promise with Async-Await 2");
  console.log(val1);
}

promiseTwoAsync()

