let j = 0;

while (j <= 5) {
  console.log(j);
  j++;
}

// when While loop is Great
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (target !== guess) {
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target}, Guess: ${guess}`);

// Do While
