// Async Await

/* 


Async is a keyword to create a function to async

async function always return a promise

if we just normal return value like ' return data ' ..... in here function take the value , wrap into a promise and the returns

if value already wrap into promise then it will return normal. No Need To wrap in promise again

await only insdie in async function


*/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Is Resolved");
  }, 3000)
})

function getData() {
  p.then((value) => {
    console.log(value)
  })
  console.log("Promise Is Consumed");
}

// getData()

// In here Promise Is Consumed print first and after 3 sec Promise Is Resolved will be print. Because Javascript dont w8 for nothing. Not wait for promise to be resolved
// and move to the next line

// To wait we use await key word

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Is Resolved");
  }, 9000)
})

async function getData1() {
  const value = await p1   // Force Fully Waiting To Promise Resolved (Appears to be w8ing)
  console.log("Promise IS Consimed 1")
  console.log(value);
}

// getData1() 


// More Deep Dive In Async Await

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Is Resolved 2");
  }, 5000)
})


const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Is Resolved 3");
  }, 10000)
})


async function getData2() {
  console.log("Hello World !!")

  const value1 = await p2
  console.log("Promise IS Consimed 2")
  console.log(value1);

  const value2 = await p3
  console.log("Promise IS Consimed 3")
  console.log(value2);
}

getData2()

/* 
Test Case 1 -  p2 func has 10 sce and p3 func has 5 sec. If we call the getData2() frunction  after 10 sec value1 and value2 will be print togheter


Test Case 2 -  p2 func has 5 sce and p3 func has 10 sec. If we call the getData2() frunction  after 5 sec value1 and after 5 sec value2  will be print 

*/