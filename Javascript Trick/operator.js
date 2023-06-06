// --------------------- Chaining Operator (?.)-------------------------

const person = {
  name: "Dom",
  age: 28
}

// Ternary Operator
const vechYear = person.vechile ? person.vechile.year : "undefined"
console.log(vechYear);

// Simpled Above Code with Chaining Operator
const vechYearNew = person.vechile?.year
console.log(vechYearNew);

/**
 * Expalin - person.vechile? .. this part says that if person.vechile is not undfined or not null the we acess the .year value
 * if it is undefined we return undefined
 */

// We can also use multi chaning operator in one line

// It also work on method
console.log(person.vechYear?.drive?.());



// Work With Nullish coalescing operator (??)

const vechYearNullish = person.vechile?.year ?? 1970
console.log(vechYearNullish);

// Basically it says that if left side is undefined the print defaul value as 1970







// --------------------- Nullish coalescing operator (??)-------------------------

const Drive = {
  Difiulty: "Easy",
  Starting: 0
}


const cash = Drive.Starting || 500

console.log(cash);


/**
 * Explain -  Suppose There is a game and have starting cash. Above the code we write logic like that if Starting key is not presnt
 * we use 500 because Drive.Starting make falsy and if present we use Starting cash
 * 
 * Now if we set Starting 0 , it also give us 500 because Drive.Starting it make falsy value, but 0 is a proper value based on object logic
 */

// We can solve two Way


// Ternairy operator

const ternary = Drive.Starting === undefined ? 500 : Drive.Starting
console.log(ternary);

// Nullish Coalescing Operator

const nullish = Drive.Starting ?? 500   // Left Side Check it is value null or undefined. Strict Check
console.log(nullish);



//----------------------- Logical OR assignment (||=) -----------------------

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// Expected output: "title is empty"

/**
 * Explain if there is empty string we can put default value
 */