// Random Number Gen
let number = Math.floor(Math.random() * 100 + 1)

console.log(number);

const submit = document.querySelector("#subt")
const input = document.querySelector("#guessField")
const gusess = document.querySelector(".guesses")
const remianing = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuesss = []
let numOfGuess = 1

let playGame = true

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(input.value)
    console.log(guess);
    validateGuess(guess)
  })
}

// To Validate Number
function validateGuess(guess) {

  // Validate The Number
  if (isNaN(guess)) {
    alert("Pleas Enter A Valid Number")
  } else if (guess < 1) {
    alert("Pleas Enter A Number More Than 1")
  } else if (guess > 100) {
    alert("Pleas Enter A Number Less Than 100")
  } else {
    prevGuesss.push(guess)
    if (numOfGuess === 10) {  // Checking For Game Over
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${number}`)
      endGame()
    } else { // If Not Pass to the next function
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

// To Chek With Random Number
function checkGuess(guess) {
  if (guess === number) {
    displayMessage(`You Guessed It Right`)
    endGame()
  } else if (guess < number) {
    displayMessage(`Number is Low`)
  } else if (guess > number) {
    displayMessage(`Number is High`)
  }
}

// To Update Array and Remian
function displayGuess(guess) {
  input.value = ""
  gusess.innerHTML += `${guess} `
  numOfGuess++
  remianing.innerHTML = `${11 - numOfGuess}`
}

// To Dsipaly Mesage
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
  input.value = ""
  input.setAttribute('disabled', '')
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGame = document.querySelector("#newGame")
  newGame.addEventListener('click', (e) => {
    number = Math.floor(Math.random() * 100 + 1)
    prevGuesss = []
    numOfGuess = 1
    gusess.innerHTML = ''
    remianing.innerHTML = `${11 - numOfGuess}`
    input.removeAttribute("disabled")
    startOver.removeChild("p")
    playGame = true
  })
}



