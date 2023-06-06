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

//--------------Decode Jeson Web Token------------------------
/**
 * npm i jwt-decode
 *
 * const jwtDecode = require("jwt-decode")
 *
 * const decodeToken = jwtDecode(response)
 */


//--------------URLSearchParams------------------------


const paramObject = {
  client_id: "1000.AKXZ0VG60GJQXNJ1S88Y4OVCIVMBNE",
  client_secret: "316ef5bc74f71405fb080ae1883d4d4836e475ba5f",
  grant_type: "authorization_code",
  redirect_uri: "https://eoer4i6zvfphqmt.m.pipedream.net",
  code: `${authCode}`
}

const urlParam = new URLSearchParams(paramObject)
const response = await axios.post("https://accounts.zoho.in/oauth/v2/auth/token?", urlParam)


//--------------at()------------------------

//To know value in arr at any index postion
const arr = [1, 2, 4, 5, 6]

const postion = arr.at(2) // Ans - 4

// To Konw lost value in arr.No need to write <arr.length-1>
const postion1 = arr.at(-1)  // Ans - 6



//--------------Unique Array of Duplicate Object------------------------


const books = [

  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" }

]


const jsonObject = books.map(JSON.stringify);

let uniqueSet = new Set(jsonObject);
let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

console.log(uniqueArray);



//--------------Create Unique Array------------------------
const arr1 = [1, 2, 4, 4, 5, 6, 7, 7, 8, 9, 9]

const uniqueArr = new Set(arr1)
console.log(uniqueArr)


//--------------Match Two Array is Same or Not------------------------
/**
 * task._assignee = []
 * assignee = []
 */
JSON.stringify(task._assignee) !== JSON.stringify(assignee)


//--------------Match Two Array and Find Unqiue Value------------------------
const array1 = ['12', '1', '10', '19', '100'];
const array2 = ['12', '10', '19'];

const array3 = array1.filter((obj) => {
  return array2.indexOf(obj) === -1
})

console.log(array3);


