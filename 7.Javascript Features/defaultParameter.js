const multi = function (a, b = 2) {
  return a * b
}

console.log(multi(2)); // Ans = 4 , b default is 2 so a * b ....2 * 2 = 4

console.log(multi(2, 3)); // Ans = 6 , b is now 3 so a * b .... 2 * 3 =6

// Order is Matter