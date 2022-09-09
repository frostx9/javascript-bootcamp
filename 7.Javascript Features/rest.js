// Collects all argument turn into a single array/argument
// Argument is not work with arrow function

function sum(...num) { // Convert into one array
  console.log(num);
}

sum(4, 5, 6, 7) // Ans - [ 4, 5, 6, 7 ]

function sum1(...num) { // Convert into one array
  return num.reduce((accu, cuma) => {
    return accu + cuma
  })
}

console.log(sum1(1, 2, 3, 4)); // Ans - 10

// Collect remaining argument / Not match with parameter

function name(first, second, ...remain) {
  console.log("first", first);
  console.log("second", second);
  console.log("remain", remain);
}

name("Arthur", "John", "Diana", "King", "Queen", "Prince")
/*
Ans - first Arthur
      second John
      remain [ 'Diana', 'King', 'Queen', 'Prince' ]
 */