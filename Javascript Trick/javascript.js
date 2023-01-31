// Object Remove from array

const apps = [
  { id: 1, name: 'Jon' },
  { id: 2, name: 'Dave' },
  { id: 3, name: 'Joe' }
]

//remove item with id=2
const itemToBeRemoved = { id: 2, name: 'Dave' }

apps.splice(apps.findIndex(a => a.id === itemToBeRemoved.id), 1)

console.log(apps) // [ { id: 1, name: 'Jon' }, { id: 3, name: 'Joe' } ]


// Update an Object's Property in Array of Objects in JS

const arr2 = [
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

for (const obj of arr2) {
  if (obj.id === 1) {
    obj.name = 'Alfred';

    break;
  }
}


// Promise.all

const [client, user] = await Promise.all([
  await User.findOne({ _id: project._client }).exec(),
  await User.findOne({ _id: assigneeId }).exec()
])


// Captilaized String in Array
const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalized)

// -------------- String Replace With Regex-----------------

const str = "Hello Frost www.youtube.com"
const searchRegExp = /www/gi;
const replaceWith = 'https://www';
const result = str.replace(searchRegExp, replaceWith) // Result - "Hello Frost https://www.youtube.com"


// -------------- Desire Future Date-----------------

const tomorrow = new Date()
// add 5 day to today
tomorrow.setDate(new Date('2023-01-20').getDate() + 5)

console.log(tomorrow)
// 2023-01-25T10:46:44.105Z


// -------------- Array Length Define-----------------

const data = [];
data.length = 5; // user defined length
console.log(data.length);


// -------------- Remove item from array-------------- 

let animal = ["Dog", "Cat", "Tiger", "Lion"]
let rem = "Dog"

animal = animal.filter((e) => e !== rem)

console.log(animal)


//--------------Regex Search------------------------
if (searchText !== undefined) {
  const newSearch = searchText.replace("+", "\\+")

  const searchList = newSearch.trim().split(" ")
  const regex = new RegExp(`(${searchList.join("|")})`, "gi")

  query.$or = [
    { "name.first": regex },
    { "name.last": regex },
    { email: regex },
    { phone: regex }]
}