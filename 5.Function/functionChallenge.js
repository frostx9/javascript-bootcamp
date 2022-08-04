// Password Validator

function isValidPassword(password, username) {
  if (password.length < 8) return false
  else if (password.indexOf(" ") !== -1) return false
  else if (password.indexOf(username) !== -1) return false
  return true
}

const answer = isValidPassword("abcdefghi", "dogLover")
console.log(answer)
