const form = document.querySelector("form") // Form Tag
// This here will give empty value
// const height = parseInt(document.querySelector(".height").value)

form.addEventListener("submit", (e) => {
  e.preventDefault() // By Default Stop To Submit

  const height = parseInt(document.querySelector("#height").value)  // To Get Value and convert to integer
  const weight = parseInt(document.querySelector("#weight").value)  // To Get Value and convert to integer
  const result = document.querySelector("#results")
  const msg = document.querySelector("#msg")

  if (!height) {
    result.innerHTML = "Please Give A Valid Height"
  } else if (!weight) {
    result.innerHTML = "Please Give A Valid Weight"
  } else {
    const ans = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `<span>${ans}</span>`

    if (ans < 18.6) {
      msg.innerHTML = "Under Weight"
    } else if (ans > 24.9) {
      msg.innerHTML = "Overweight"
    } else {
      msg.innerHTML = "Normal Range"
    }
  }
})