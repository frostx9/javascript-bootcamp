let example = " This is the string";

// String is inmuteable. It can't be change letter

// To make String Upper Case
console.log(example.toUpperCase()); // Ans = THIS IS THE STRING

// To make String Lower Case
console.log(example.toLowerCase()); // Ans = this is the string

// Index . All string start with 0. To find index posting
console.log(example[2]); // Ans = i

// To find lasst chareter of any string
console.log(example[example.length - 1]); // Ans = g

// To find length of a string
console.log(example.length); // Ans = 18

// To remove space in string. Space remove from begining and ending postion
console.log(example.trim());

//indexOf -> find the postion of a string or substring
console.log(example.indexOf("s")); // Ans = 3 , because  s only one chareteter

console.log(example.indexOf("string")); // Ans= 13 , because string is a subs tring of this string

// -1 in indexOf meaning string is not found

// Cut sting. slice()
console.log(example.slice(3)); // Ans - 'is is the string'. 1st number is staring number. Include

console.log(example.slice(3, 7)); // Ans = 'is i'. 1st number is staring number. Include . 2nd Number is ending number. Exclude

//replace a string
console.log(example.replace("string", "replacedstring")); // Ans= 'This is the replacedstring'

// Start With String
const start = "Aloha".startsWith("Al")
console.log(start);
