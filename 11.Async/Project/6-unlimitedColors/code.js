// Gnerate A Random Colour
const radomColor = () => {
  const hex = "0123456789ABCDEF"
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * 16))
  }

  return color
}


// Dom


let intervalId
const startChangeColor = function () {

  function changeBgColor() {
    document.body.style.backgroundColor = radomColor()
  }

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
  }

}


const stopChangeColor = function () {
  clearInterval(intervalId)
  intervalId = null
  document.body.style.backgroundColor = "#212121"
}


document.querySelector("#start").addEventListener("click", startChangeColor)
document.querySelector("#stop").addEventListener("click", stopChangeColor)






