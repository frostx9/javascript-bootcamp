// We can add function as propertise in object
// Group Function Toghter. For Nice Orhaniztion
// This is a kind of creation of own method...like -  .toUpperCase()

const math = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  multi: (x, y) => x * y,
  divide: (x, y) => x / y,
}

console.log(math.add(6, 2)); // Ans - 8
console.log(math.sub(6, 2)); // Ans - 4
console.log(math.multi(6, 2)); // Ans - 12
console.log(math.divide(6, 2)); // Ans - 3

// Method Shorthand Syntax..No need to make key : value pair

const math1 = {
  add(x, y) { return x + y },
  sub(x, y) { return x - y },
  multi(x, y) { return x * y },
  divide(x, y) { return x / y },
}

console.log(math1.add(6, 2)); // Ans - 8
console.log(math1.sub(6, 2)); // Ans - 4
console.log(math1.multi(6, 2)); // Ans - 12
console.log(math1.divide(6, 2)); // Ans - 3
