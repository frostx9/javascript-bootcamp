// For(intial ; condition ; increment/decrement)  --> rule
// For loop use for known range

const name = "Hello";

for (i = 0; i < name.length; i++) {
  console.log(`${i + 1}.Hello`);
}

for (i = 1; i <= 10; i++) {
  console.log(i * i);
}

// Infinte Loop

// for (i = 1; i >= 0; i++) {
//   console.log("Hello");
// }

//Nested For Loop

const gameBoard = [
  [4, 64, 71, 4],
  [12, 67, 34, 2],
  [8, 32, 16, 1],
  [2, 5, 4, 1],
];

for (i = 0; i < gameBoard.length; i++) {
  const row = gameBoard[i];
  console.log(row);
  for (j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}


// Break In For Loop

for (i = 0; i < 10; i++) {

  if (i === 5) {
    console.log("Detected 5");
    break    // Stop the loop after 5. Break The Control Flow
  }
  console.log(`Valur of i is ${i}`);
}


// Continue In For Loop

for (i = 0; i < 10; i++) {

  if (i === 5) {
    console.log("Detected 5");
    continue    // Skip The Cndtion When i = 5. Continue The Loop
  }
  console.log(`Valur of i is ${i}`);
}

// Break & Continue Not Working in ForEach loop. We use return keyword in forEach