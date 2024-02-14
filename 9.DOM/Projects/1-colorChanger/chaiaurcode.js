// Buttton Select
const buttons = document.querySelectorAll(".button")

// Body Select
const body = document.querySelector("body")

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {   // Event Listner Click

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = "grey"
    // } else if (e.target.id === "white") {
    //   body.style.backgroundColor = "white"
    // } else if (e.target.id === "blue") {
    //   body.style.backgroundColor = "blue"
    // } else {
    //   body.style.backgroundColor = "yellow"
    // }

    const color = e.target.id
    switch (color) {
      case "grey":
        body.style.backgroundColor = "grey"
        break;
      case "white":
        body.style.backgroundColor = "white"
        break;
      case "blue":
        body.style.backgroundColor = "blue"
        break;
      case "yellow":
        body.style.backgroundColor = "yellow"
        break;
      default:
        body.style.backgroundColor = "white"
    }
  })
})