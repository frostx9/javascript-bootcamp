// Some And Every both returns true and false based on condtion match

const arr = ["Dog", "Cat", "Tiger", "Lion", "Gitaffe"]

// Every

const evry = arr.every((word) => word.length == 3)
console.log(evry); // Ans False... Because there are some word which leanth greater than 3

const evry1 = arr.every((word) => {
  let last = word.length - 1
  return word[last] == "g"
})
console.log(evry1);// Ans False


// Some

const sme = arr.some((word) => word.length == 3)
console.log(sme); // Ans true... Because there are some word which leanth is  3

const sme1 = arr.every((word) => {
  let last = word.length - 1
  return word[last] == "g"
})
console.log(sme);// Ans true