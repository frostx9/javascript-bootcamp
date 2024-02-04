// --------------------- Nullish coalescing operator (??)-------------------------

// This Operator Workd On Two Condtion - Null and Undeifned

const Drive = {
  Difiulty: "Easy",
  Starting: undefined
}


const cash = Drive.Starting || 500

console.log("Cash", cash);

/**
 * Explain -  Suppose There is a game and have starting cash. Above the code we write logic like that if Starting key is not presnt
 * we use 500 because Drive.Starting make falsy and if present we use Starting cash
 * 
 * Now if we set Starting 0 , it also give us 500 because Drive.Starting it make falsy value (0 is falsy Value ), but 0 is a proper value based on object logic
 */



// We can solve two Way

// Ternairy operator

const ternary = Drive.Starting === undefined ? 500 : Drive.Starting
console.log("Ternary", ternary);



// Nullish Coalescing Operator

const nullish = Drive.Starting ?? 500   // Left Side Check it is value null or undefined. Strict Check
console.log("Nullish", nullish);