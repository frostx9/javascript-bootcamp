
// // Change All Li innerText
// const adllLi = document.querySelectorAll("li")

// // for (let i = 0; i < adllLi.length; i++) {
// //   // console.log(adllLi[i].innerText);
// //   adllLi[i].innerText = "Dom is Beautiful"
// // }

// for (let all of adllLi) {
//   all.innerHTML = " Dom is <b> Beautiful </b> "
// }

// // Changae All li color

// const colorLi = document.querySelectorAll("li")
// const colors = ["Orange", "Red", "Black"]

// // for (let li of colorLi) {
// //   li.style.color = "Orange"
// // }

// colorLi.forEach((item, index) => {
//   const color = colors[index]
//   item.style.color = color
// })

//------------------------- Creatae and add new element through the dom

const newH2 = document.createElement("h2")
newH2.innerText = "I love to play video game"
newH2.classList.add("todo")

const section = document.querySelector("section") // section is the parent here
section.appendChild(newH2)

// --------------------customize element add
const parent = document.querySelector("ul")
const newEle = document.createElement("li")
newEle.innerText = "Plug the mow machine first"

//add before first child ..always
const firstChild = document.querySelector('li.todo')
parent.insertBefore(newEle, firstChild)

// add anywhere 
const newEle1 = document.createElement("li")
newEle1.innerText = "Take the trash from table first"

const thirdChid = document.querySelectorAll("li.todo")[2]
parent.insertBefore(newEle1, thirdChid)
