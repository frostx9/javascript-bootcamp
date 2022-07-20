// For Object we use for..in loop..we actaly loop over propoerty/index

const movie = {
  Arrival: 9.5,
  Alien: 9,
  Amilei: 5,
  Amadeus: 7.5,
  Coraline: 7.5,
};

for (let name of Object.keys(movie)) {
  // Object.keys()
  console.log(name);
}

for (let name of Object.values(movie)) {
  // Object.values()
  console.log(name);
}

for (let great in movie) {
  console.log(`${great} : ${movie[great]}`);
}
