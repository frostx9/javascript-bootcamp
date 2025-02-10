// For Object we use for..in loop..we actaly loop over propoerty/index
// For in ..this loop always loop over object propty or array index

const movie = {
  Arrival: 9.5,
  Alien: 9,
  Amilei: 5,
  Amadeus: 7.5,
  Coraline: 7.5,
}

// Get Only Keys
for (let name of Object.keys(movie)) {
  console.log(name)
}

// Get Only Values
for (let name of Object.values(movie)) {
  console.log(name)
}

// For..in loop .. greet is the key of the object
for (let great in movie) {
  console.log(`${great} : ${movie[great]}`)
}
