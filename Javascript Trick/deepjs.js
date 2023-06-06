//--------------Deep Copy------------------------

const calenderEvent = {
  title: "Builder",
  date: new Date(),
  arr: ["A", "B"]
}

// Shallow Copy 

const shallowCopy = { ...calenderEvent }

console.log(calenderEvent === shallowCopy);  // False

console.log(calenderEvent.arr === shallowCopy.arr) // True ..Because it did not copy , it just make a reference of the array. if any 
// Change in  calenderEvent array , it will also affect shallowCopy array


// Deep Clone Copy

const structuredCopy = structuredClone(calenderEvent)
console.log(structuredCopy);

console.log(calenderEvent.arr === structuredCopy.arr) // Now It is false



//-------------- Closuer ------------------------

let count = 0

const counter = () => {
  return count++
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/**
 * IT looks good , but if we use counter() function in various place , the count variable will be misbehave
 * so we can wrap all the conde in a wrapper. its called clouser. we make count varaible from external to internal
 */

const makeCount = () => {
  let count = 0
  return () => {
    return count++
  }
}
