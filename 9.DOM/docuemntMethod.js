//---------------------------innerText---------------------------

const h1 = document.querySelector("h1") // h1 is tag  Selected
h1.innerText // Ans -  My WebPage

// To Update 
h1.innerText = "i 'm Hungry"

/* innerText returns all text between seelcted tag by querySelector*/

//textContent

h1.textContent //  Ans -  My WebPage

// To Update 
h1.textContent = "i 'm Hungry"

/*
innerText = This only show pure text in body what is shown on the page

<h1 id="title" class="heading"> Dom Learning <span> with Javascript</span></h1> => it will show only Dom Learning

textContent = It converts everyting into text and show.

<h1 id="title" class="heading"> Dom Learning <span> with Javascript</span></h1> => it will show Dom Learning with Javascript
*/


/*---------------------------------innerHtml------------------------------------ */

// It not only retrun text ..it alaso retrun tag alongside with text

const ul = document.querySelector("ul")
ul.innerHTML
/* 
Ans-
"   <li class="sepecial">First</li>
    <li>Second</li>
    <li class="sepecial">Third</li>
"
It retruns all tags alongside with text

innerText cant parse tag, mean what is the tag..where innerHTNl can parse tag

h1.innerHTMl += "<b> HEllo </b>" ...it can understand it is a bold tag. It will show in bold format on website

h1.innertext += "<b> HEllo </b>" ..it can not understand is is a blod tag...it converts all text between ""
*/

/*--------------------------------------------------------------------- */

//value --> it use extracted value from input tage
const input = document.querySelectorAll("input") // it will retrun array of input attribute...NodeList(5) [input, input, input, input, input]
input[0].value
// Ans - "Hello"

// for extract value from checkedbox we use checked method
input[1].checked  // For Checkbox 
// Ans - true


//href -- it use extracted value from ancahr tag. Web Site URL
const a = document.querySelectorAll("a") // a ..its anchar tag... <a href = " ">
a.href


//src
//it use extracted value from iamge src
const img = document.querySelectorAll("img")
img.src



/*--------------------------------------------------------------------- */

//getAttribute    
//this one help to get value form any king of attribue
const range = document.querySelector("input[type='range']") // it will select range attribute inside input tag. We select input tag who  have type is range
//We save it in varaible . Then acces multiaple rang attribute from it
range.getAttribute("max") // max attribute in range type attribute. 
//ans = 58

// setAttribute
range.setAttribute("min", '-500') // now min attribute in range type element is -500


/*--------------------------------------------------------------------- */

//parrentElement
const firstLi = document.querySelector("li") // It Will Seelct first li in page
firstLi.parentElement
//Ans = <ul>..</ul> ...becacuse li is under the ul

//children
const firstUl = document.querySelector("ul")
firstUl.children
//Ans = <li>...</li>

//nextSibling
firstLi.nextElementSibling
//Ans -  <li>Second</li>

//previousSibling
thirdLi.previousElementSibling

/*--------------------------------------------------------------------- */
// Channing All Elelemt
// Change All Li innerText
const allLi = document.querySelectorAll("li") // Retrun as a NodeList. Look Like Array. But Not actal array.
for (let i = 0; i < allLi.length; i++) {
    allLi[i].innerText = "All Li Will Be Change"
}
//Different loop
for (let lis of allLi) {
    lis.innerText = "All Li Will Be Change"
}

// Changae All li color

const alliColour = document.querySelectorAll("li")
const color = ["Orange", "Red", "Black"]

alliColour.forEach((item, index) => {
    // const color = colors[index]
    // item.style.color = color
    item.style.color = color[index]
});


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

// done form css
todo.classList.add("done") // add new calss into todo class
todo.classList.remove("done") // remove class form todo class

todo.classList.toggle('done') // combine both add and remove 



/*--------------------------------------------------------------------- */
// Create Elemctn throght DOM
//createElement()

//First Create new element
const newH2 = document.createElement("h2") // h2...which type of element i want to create 
newH2.innerText = "I like Dog" // add text into h2 elemment
newH2.classList.add("special") // add new class to h2 element ...<h2 class= "special"> </h2>

// now if we want add this to html ...we need appendChild() 
//appendChild() 
// it means add child to the parent
//It will always add to the end

//Second select where to add new child

const section = document.querySelector("section") // section is a element ...and it is the parent here <section>.... </section>
section.appendChild(newH2)
/**
 * <section>
 * 
 * <h2 class = "special"> "I like Dog" </h2>
 *
 * </section>
 */

//example of different create new element
const newImg = document.createElement("img")
newImg.src = ""
newImg.style.width = "200px" // Add inline css

const newSrc = document.createElement('a')
newSrc.href = ""

// insrtBefore()
// customize where i want add new elelemnt

//first select parent 
const parent = document.querySelector("ul")

//Create new element
const newEle = document.createElement("li")
newEle.innerText = "Take the trash from table first"

//second select which child above i want add new elelemt... supose i want add new element above 2nd child element
// in case of always to add above first child..use querySelectoor
const firstChild = document.querySelector("li.todo")

//now place the new elelemnt
parent.insertBefore(newEle, firstChild)

//in case add anywhere in child..add querySelectorAll

const thirdChid = document.querySelectorAll("li.todo")[2] // [2] mean selcting third child

parent.insertBefore(newEle, thirdChid) // add new element above third child


// append() prepend()
//it makes toghter

const firstP = document.querySelector('p')

const i = document.createElement('i')
i.innerText = 'I am italic'

firstP.append(i, newEle) // add both at the end of first paragraph
firstP.prepend(i, newEle) // add both at the begin of first paragraph

//insertAdjacentElement() ... later

//Remove Elelemnt

// Little Example

const newh11 = document.createElement("h1") // Create New Element h1
newh11.textContent = "Hello Wolrd" // Add Text into h1 element
newh11.className = 'header' // Give A class name to h1 element
document.getElementById("rooy").append("h1") // Add h1 elemt in div which id is root

/**
 * Differnece Between NodeList and HtmlCollection
 * 
 * document.querySelectorAll - Will Return Ndelist. We can use some array method
 * 
 * document.getElementsByClassName - Will Return HtmlCollection. We cant use any array method.
 * To do that we convert this to array with help of Array.from()
 * 
 */