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
    resolve("Promise is Resolved After 5 Sec")
  }, 10000)
})


const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is Resolved after 10 Sec")
  }, 5000)
})


async function promiseTwoAsync() {

  console.log("Hello Wold");

  const val = await p1  // In here JS Engine look like w8ing for resolved, but in real scenario is JS is not w8ing for anyone
  console.log("Promise with Async-Await 2");
  console.log(val);

  const val1 = await p2
  console.log("Promise with Async-Await 2");
  console.log(val1);

  console.log("Hello Wold 2");
}

promiseTwoAsync()

/* 

Explanation - P1 = 5 Sec, P2 = 10 Sec

Intailly Call Stack Are empty. Function Execute In Call Stack

when JS execute the promiseTwoAsync() function it will put to the call stack and start to braek the code. "Hello Wold" printed immediately ,
At that moment when js engine sees await using in the code, js engine remove the promiseTwoAsync() function execuation is suspended and remove 
from the call stack. So it cant block the main thread because there is only one call stack in engine, and we can not stuck the call stack. other wise page will be freze

so when js engine sees await in line 71. it will suspend the promiseTwoAsync() function execuation for that time and it will w8 for p1 resolved , and when 
p1 is resolve then only it move ahead

So after 5 sec when p1 is resolve, promiseTwoAsync() function came again into call stack and start execuation from where it left. so it will be 
line 72 ` console.log("Promise with Async-Await 2")`. So it will log the 72,73 and again it will see the await in line 75. Again suspened the 
promiseTwoAsync() function. Again Comeback when p2 is resolve. Start the execute from line 76



Explanation - P1 = 10 Sec, P2 = 5 Sec

Intailly Call Stack Are empty. Function Execute In Call Stack

Same Process. But In here when js saw await in p1 at line 71, it will suspeneded execute the function for 10 sec to promise resolved
After 10 sec when p1 resolved it start to print

In line 75 again await come in p2. But in that case p2 is already resolved. Because it took only 5 sec. Whcis is less than p1
so it will print immedate


*/


// Fetch with Asyn Await
const API_URL = "https://randomuser.me/api/"

async function demoUser() {

  const data = await fetch(API_URL)   // Return Promise / Reponse Obejct

  const jsonValue = await data.json() // To Convert Response Body into JSON and store data

  console.log(jsonValue);

}

demoUser()