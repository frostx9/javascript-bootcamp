// forEach

const num = [2, 3, 4, 5, 6];

num.forEach(function (n, m) {
  console.log(n, m);
});

// map
const num1 = [2, 3, 4, 5, 6];
const text = ["boy", "girl", "teacher"];

const result = num1.map(function (num) {
  return num * 2;
});
console.log(num1);
console.log(result);

// const even = num1.map(function (num) {
//   return {
//     num: num,
//     iseven: num % 2 === 0,
//   };
// });

// console.log(even);

// const string = text.map(function (str) {
//   return str.toUpperCase().split("").join(".");
// });

// console.log(string);

// // Find

// let movie = [
//   "The Fantastic Mr Fox",
//   "Mr and Mrs Smith",
//   "Mrs. Doutfire",
//   "Mr. Deed",
// ];

// const find1 = movie.find((movie) => {
//   return movie.includes("Mrs");
// });

// console.log(find1);

// const find2 = movie.find((movie) => {
//   return movie.indexOf("Mrs") === 0;
// });
// console.log(find2);

// //filter

// const num3 = [2, 3, 4, 5, 6];

// const fil = num3.filter((n) => {
//   return n % 2 === 0;
// });

// console.log(fil);

// // some , every

// const animal = ["Dog", "Cag"];

// const res = animal.every((word) => {
//   const last = word.length - 1;
//   return word[last] === "g";
// });

// console.log(res);

// const num4 = [3, 4, 5, 6, 7];

// const result3 = num4.reduce((total, current) => {
//   return total * current;
// });

// console.log(result3);

// const res4 = num4.reduce((max, current) => {
//   if (current > max) return current;
//   return max;
// });

// console.log(res4);
