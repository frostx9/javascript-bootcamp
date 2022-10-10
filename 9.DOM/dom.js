// Css Targert

/*
To target image from id ..We use '#'

<img id="image"
    src="https://images.unsplash.com/photo-1665095450911-9b27b929430c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    alt="default">

#image {
  width : 250px;
}

To target image from class ..We use '.'

.special {
  color : teal
}

*/

// Dom - Document Object Model
//When any web page laods up, brower turn all into bunch of javascript object
/*
Document is the entry point of DOM. It contains represntaion of all the content of page
it is the height point of html page
          Doucment
             \
             Body
             /\
            h1 h2
          /
        Ul
 */

// Selecting Process in DOM
// Selecting Element First, then manupulating the element 

// getElemntById - It takes the matching elemnt id 
//Target Elemnt by id
//id must be unique in one every page

document.getElementById("image") // ..in here image is the id..  <img id="image"..../>...return array like collection

//getElemntByTagName
// It seelct all tag ..like h1, img , p 
document.getElementsByTagName("img") // in here img is the tag .. <img id="image"..../>

//getElementByClassName
//It seelct target by class name
document.getElementsByClassName("sepecial") // .. in here sepecial is the clas name...<li class="sepecial">Third</li>

/*
if there is multiaple same class name.. and want to choose specfic elelmt
then first choost the tag , then choose the class
 */
const ul = document.getElementsByTagName("ul")[0]
ul.getElementsByClassName("special")

//querySelector
document.querySelector("h1") // by tag name..only return first match..not return any array
document.querySelector("#image")  // by id
document.querySelector(".sepcial") // by class

//querySelectorAll
document.querySelectorAll(".sepcial") // it returns all match..not match first one