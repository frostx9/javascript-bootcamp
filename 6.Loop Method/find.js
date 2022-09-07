// Filter - An array method
// It returns first value when it first match..if there is multipale vale.. always retrun first match value/It stops whrn it find very first one match

const arr = ["Dog", "Cat 1", "Tiger", "Lion", "Cat 1 Cat 2", "Gitaffe"]

const findMatch = arr.find((item) => {
  return item.includes("Cat 1")
})

console.log(findMatch); // Answer Cat 1

const findMatch1 = arr.find((item) => {
  item.indexOf("Cat") === 0
})

console.log(findMatch1);