// It turns every Charecter into indvidual argument

const arr = [34, 35, 67, 57, 109, 12, 36]

/*
it turns whole array into indvidual argument
Math.max(34, 35, 67, 57, 109, 12, 36)
*/

console.log(Math.max(...arr)); // Ans = 109

const animal = ["Dog", "Cat", "Lion", "Tiger"]

const give = (a, b, c, d) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

give(...animal)

//Spread In Array Litterals. Do not refernece same array memnory

const combineArray1 = [...arr, ...animal] // Copy into new array
console.log(combineArray1);

const combineArray2 = ["Add", ...arr, ...animal] // Can add new things 
console.log(combineArray2);

const strSpread = [..."abcdefg"]
console.log(strSpread);

// Spread In Object

const book1 = {
  title: "Feluda",
  author: "Roy"
}

const book2 = {
  title: "Tintin",
  author: "Herge",
  type: "Comics"
}

const book3 = {
  title: "Spiderman",
  author: "Stan Lee",
  type: "Comics"
}

const story1 = {
  ...book1,           // Spread all book1 items in story1 object and add type key
  type: "Detective"
}

console.log(story1); // Ans - { title: 'Feluda', author: 'Roy', type: 'Detective' }

const story2 = {
  ...book2,
  ...book3   // Object Overwrite each other
}

console.log(story2); // Ans - { title: 'Spiderman', author: 'Stan Lee', type: 'Comics' }

const story3 = {
  ...book2,
  type: "Detective Comics" // Overwrite type key from comics to Detective Comics
}

console.log(story3); // Ans - { title: 'Tintin', author: 'Herge', type: 'Detective Comics' }