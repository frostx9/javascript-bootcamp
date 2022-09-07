// filter = An Array Method
// It return array of item which is mathed by test case. Dont Update the original array

const arr = [34, 35, 67, 57, 109, 12, 36]

const even = arr.filter((item) => {
  return item % 2 == 0
})

console.log(even); // Ans = [ 34, 12, 36 ]

const odd = arr.filter((item) => {
  return item % 2 != 0
})
console.log(odd); // Ans = [ 35, 67, 57, 109 ]