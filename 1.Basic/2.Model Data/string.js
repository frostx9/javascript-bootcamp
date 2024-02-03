let example = " This is the string";
let example1 = new String("ThisIsASting") // Another Way Declare String

// String is inmuteable. It can't be change letter. Because It Store in Stack Memory Structure

// To make String Upper Case
console.log(example.toUpperCase()); // Ans = THIS IS THE STRING

// To make String Lower Case
console.log(example.toLowerCase()); // Ans = this is the string

// Index . All string start with 0. To find index posting
console.log(example[2]); // Ans = h
console.log(example.charAt(2)) // Ans = h


// To find lasst chareter of any string
console.log(example[example.length - 1]); // Ans = g

// To find length of a string
console.log(example.length); // Ans = 18

// To remove space in string. Space remove from begining and ending postion
console.log(example.trim());

//indexOf -> find the postion of a string or substring
console.log(example.indexOf("s")); // Ans = 4 , because  s only one chareteter

console.log(example.indexOf("string")); // Ans= 13 , because string is a subs tring of this string

// -1 in indexOf meaning string is not found

// String Operation
console.log("Sub-String", example1.substring(0, 5));

console.log("Slice 1", example1.slice(3)); // Ans - sIsASting. Cut From Index Postion 3 to rest

console.log("Slice 2", example1.slice(3, 7)); // Ans = sIsA. 1st number is staring number. Include . 2nd Number is ending number. Exclude

console.log("Slice 3", example1.slice(-10, 4)); // Ans = sIsA. 1st number is staring number. Include . 2nd Number is ending number. Exclude

//replace a string
console.log(example.replace("string", "replacedstring")); // Ans= 'This is the replacedstring'

// Start With String
const start = "Aloha".startsWith("Al")
console.log(start);
