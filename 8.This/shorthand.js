// For Create Object Litterale

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const getResult = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return { max, min }    //  return { max : max, min : min}  => return { max, min } . In here we take the 
  // varaible name and set as key : value pair
}

const result = getResult(arr)
console.log(result);