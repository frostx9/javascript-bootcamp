// ToPrimitive ( input [ , preferredType ] ) ... EcmaScript Rule
// ToPrimitive default value is Number
console.log("1" + 2 + 2) // Ans 122. Because in here ToPrimitive is called and first hint is String. So Javascript Make Whole Value to String
console.log(1 + 2 + "2") // Ans 32. Because in here ToPrimitive is called and first hint is Number. So First two word is added and last one sting