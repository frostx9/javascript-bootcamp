// only .sort() method convert all elments to string and it sort upone alphabetic order

const arr = [34, 35, 67, 57, 109, 12, 36]


// Assendong Order Sort... Small to Big
/*
* if a-b return negative number or less than 0 then it sort a before b
if a-b return postive number or greater than 0 then it sort b before a
*   a       b
*   34      35   => a-b = -1
* so it sort a before b
*  [34,35]
*
*  a       b
*  35      67   => a-b = -1
* so it sort a before b
*  [34,35,67]
*
*  a       b
*  67      57   => a-b = 10
* so it sort b before a
*  [34,35,57,67]
*/
const assendingOrderSort = arr.sort((a, b) => a - b)
console.log(assendingOrderSort); // Ans [ 12, 34, 35, 36,57, 67, 109 ]



// Descending Order Sort ....Big to Small
const descendingOrderSort = arr.sort((a, b) => b - a)
console.log(descendingOrderSort); // Ans [109, 67, 57, 36, 35, 34, 12]


// .slice() - we can use this method to copy of original array