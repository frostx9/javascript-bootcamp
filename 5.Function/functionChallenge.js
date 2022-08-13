// Password Validator

function isValidPassword(password, username) {
  if (password.length < 8) return false
  else if (password.indexOf(" ") !== -1) return false
  else if (password.indexOf(username) !== -1) return false
  return true
}

const answer = isValidPassword("abcdefghi", "dogLover")
console.log(answer)

// Average

function average(arr) {
  let total = 0
  for (let number of arr) total += number
  return total / arr.length
}

console.log(average([75, 76, 80, 95, 100]))

// Pangrams
function isPangram(string) {
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (string.indexOf(char) === -1) return false
  }
  return true
}

// Get Playing Card
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length)

  return arr[idx]
}

function getCard() {
  const value = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ]

  const card = ["club", "spades", "hearts", "diamonds"]

  return `{ value:${pick(value)} Suit: ${pick(card)} }`
}

console.log(getCard())
