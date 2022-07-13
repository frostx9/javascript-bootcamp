const arr = [2, 3, 5, 11, 7, 8, 9];

const result = arr.reduce((a, b) => {
  return a + b;
});

console.log(result);

const result2 = arr.reduce((a, b) => {
  if (a > b) return a;
  return b;
});

console.log(result2);
