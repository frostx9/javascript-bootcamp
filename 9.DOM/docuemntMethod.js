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