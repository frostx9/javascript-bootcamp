let j = 0;

while (j <= 5) {  // Check Condition First
  console.log(j);
  j++;
}

/**
 * Intially J = 0. Loop Condition j <= 5. Mean The Loop is Continue. when J is reach to 5.
 */



// when While loop is Great
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (target !== guess) {
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target}, Guess: ${guess}`);



// Do While
// Work First. Condtion Checked Latter

let score = 1

do {
  console.log(`Score: ${score}`);
  score++
} while (score <= 5)
