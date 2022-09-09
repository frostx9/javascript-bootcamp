// ---------Destructuring Arrays---------

// Based on index postion
// Name can be anyting - first / firstElent - anytihng

const animal = ["Dog", "Cat", "Lion", "Tiger"]

const [first, second, third, fourth] = animal

console.log(first);  // first = Dog
console.log(second);  // second = Cat
console.log(third); // third = Lion
console.log(fourth);  // fourth = Tiger

// Skipping
const [first1, , fourth1] = animal
console.log(first1);  // first1 = Dog
console.log(fourth1);  // fourth1 = Tiger

// With Rest 
const [first2, ...other] = animal
console.log(first2);  // first2 = Dog
console.log(other);  // other = [ 'Cat', 'Lion', 'Tiger' ]


//--------- Destructuring Objects---------

// Based on name of the property / key

const book = {
  title: "Tintin",
  author: "Herge",
  type: "Comics"
}

const { title, author, type } = book

console.log(title); // Ans - Tintin
console.log(author);  // Ans - Herge
console.log(type);  // Ans - Comics


//--------- Nested Destructuring ---------


const arrBook = [
  {
    title: "Feluda",
    author: "Roy"
  },
  {
    title: "Tintin",
    author: "Herge",
    type: "Comics"
  },
  {
    title: "Spiderman",
    author: "Stan Lee",
    type: "Comics"
  }
]

const [, { author: writer },] = arrBook

console.log(writer); // Ans - Herge

//--------- Destructuring Parameter ---------

//For Object
const book1 = {
  title: "Tintin",
  author: "Herge",
  type: "Comics"
}

function details({ title, author }) {  // Use in Parameter
  return `${title} ${author}`
}

console.log(details(book1));

//for Array
function details([title, author])
//remian  are same as object
