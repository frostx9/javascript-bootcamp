// innerText
const h1 = document.querySelector("h1") // h1 is tag 
h1.innerText // Ans -  My WebPage
/* innerText returns all text between seelcted tag by querySelector*/

//textContent
//same as innerHtml
/*
innerText = This only show pure text in body or beween tag.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus
accusamus, eum tempora itaque cum sunt repellat libero quibusdam, ad earum
error corporis amet reiciendis! Accusantium nobis nesciunt esse rerum?'

textContent = It converts everyting into text and show..and also dont change foramt of the html style

Laborum
    doloribus accusamus, eum tempora itaque cum sunt
    repellat libero quibusdam, ad earum error corporis amet reiciendis! Accusantium nobis nesciunt esse rerum?


*/

/*--------------------------------------------------------------------- */
// innerHtml

// It not only retrun text ..it alaso retrun tag alongside with text

const ul = document.querySelector("ul")
ul.innerHTML
/* 
Ans-
"   <li class="sepecial">First</li>
    <li>Second</li>
    <li class="sepecial">Third</li>
"
.. It retruns all tags alongside with text

innerText cant parst tag..where innerHTNl can parse tag

h1.innerHTMl += "<b> HEllo </b>" ...it ccan understan it is a bold tag

h1.innertext += "<b> HEllo </b>" ..it can not understand is is a blod tag...it converts all text between ""
*/

/*--------------------------------------------------------------------- */
//value

//it use extracted value from input tage
const input = document.querySelectorAll("input")
input[0].value
// Ans - "Hello"

// for extract value from checkedbox we use checked method
input[1].checked
// Ans - true

//href
//it use extracted value from ancahr tag
const a = document.querySelectorAll("a") // a ..its anchar tag... <a href = " ">
a.href

//src
//it use extracted value from iamge src
const img = document.querySelectorAll("img")
img.src



/*--------------------------------------------------------------------- */

//getAttribute    
//this one help to get value form any king of attribue
const range = document.querySelector("input[type='range']") // it will select range attribute inside input tage
range.getAttribute("max") // max attribute in range type attribute
//ans = 58

// setAttribute
range.setAttribute("min", '-500') // now min attribute in range type element is -500


/*--------------------------------------------------------------------- */
//parrentElement

const firstLi = document.querySelector("li")
firstLi.parentElement
//Ans = <ul>..</ul> ...becacuse li is under the ul

//children
const firstUl = document.querySelector("ul")
ul.children

//nextSibling
firstLi.nextElementSibling
//Ans -  <li>Second</li>

//previousSibling
thirdLi.previousElementSibling

/*--------------------------------------------------------------------- */

// Altering Style
//Manipualte css property using javascipt
// Not much useful

//style 

const h1New = document.querySelector("h1")
h1New.style // it will retrun empty string..unless css aplied in inline way ...<h1 style = "color : teal">

h1.style.color = "Orange" // change the color using javascript

/*--------------------------------------------------------------------- */
//getComputedStyle - 

const liNew = document.querySelector("li")
const styles = getComputedStyle(liNew)

styles.color
//Ans - rgb(x, x, x)


/*--------------------------------------------------------------------- */

// Manupulating Class at once

// .classlist



const todo = document.querySelector("#todos todo")
//class is an attribute
todo.getAttribute("class")

todo.classList
// DOMTokenList ['todo', value: 'todo']

todo.classList.add("done") // add new calss into todo class
todo.classList.remove("done") // remove class form todo class

todo.classList.toggle('done') // combine both add and remove 