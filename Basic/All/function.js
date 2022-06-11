//Function Expression
const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

// Store in array
const result1 = [add, sub];
for (let x of result1) {
  let result1 = x(10, 2);
  console.log(result1);
}

// Store in Object
const result = {
  Addition: add,
  Subtraction: sub,
};

console.log(result.Addition(10, 2));

// Accept one function as aargument into another function

// function call(f) {
//   f();
//   f();
//   f();
// }

function laugh() {
  console.log("Hi");
}
// call(laugh);

function call1(action, num) {
  for (i = 0; i < num; i++) {
    action();
  }
}

call1(laugh, 5);

// Function Factory // Function return

function multi(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multi(3);
console.log(triple(5));

function age(val1, val2) {
  return function (age) {
    return age < val1 && age > val2;
  };
}
