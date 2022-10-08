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

document.getElementById("image") // ..in here  <img id="image"..../>

//getElemntByTagName