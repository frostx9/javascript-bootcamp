// this - it is a keyword
// It is refernce of current execuation sope
// windows is a glbal sope of the browser
//the value of 'this' is depend on invocation contect of the function that it's used in

function say() {
  console.log("Hello");
}

/* say() - this anonymus function automatically declared in a global scope
it add as a method in windows sobject / window scope
*/
// same go as var keyword

var color = "red"

// color varaible automatically declared in windown object
// windows.color -> red
// but let and const not add in window object

const person = {    // person {} ... this is now current execuation scope
  first: "Tom",
  last: "Holland",
  role: "Spiderman",
  famous() {
    const { first, last, role } = this // Destructure
    return `${first} ${last} palyed ${role} role in No Way Home movie`
  },
  fullname() {
    const { first, last, } = this // Destructure
    return `${first} ${last}`
  }
}

console.log(person.famous()); // Ans - Tom Holland palyed Spiderman role in No Way Home movie
console.log(person.fullname());

/*
the value of 'this' is depend on invocation contect of the function that it's used in.
that mean is the value will change depedning on how the function is actually executed

if  there is something to left of  '.' then there is someting to the right of '.'..then right portion is set
to the left.....person.fullname()...in here fullname() is set to the person object

but if there is nothing to lft of the '.'...thne right portion set to the global object
say()...it by default set to the global object
*/

// ** Arrow function does not work with this keyword in method. It autmatically set to the window object

//setInterval(func, 1000)

const animal = {
  name: ["Dog", "Cat", "Tiger", "Lion", "Fox", "Cow"],
  pick() {
    const { name } = this
    const idx = Math.floor(Math.random() * name.length)
    return name[idx]
  },
  start() {
    // setInterval(function () {    // when we try to use this keyword setInterval() like function ..its automatically delcared to the global object 
    //   console.log(this.pick());  // TypeError: this.pick is not a function..because its set to the windows objcet. We avoid here using arrow function
    // }, 1000)
    setInterval(() => {
      console.log(this.pick());
    }, 1000)
  }
}

console.log(animal.start());