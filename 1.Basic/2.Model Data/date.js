let myDate = new Date()

console.log("My Current Date", myDate); // Date is A Object

// Convert To String
console.log("My Current Date To String 1", myDate.toString());

console.log("My Current Date To String 2", myDate.toDateString());

console.log("My Current Date To String 3", myDate.toLocaleString());

console.log("My Current Date To String 4", myDate.toLocaleDateString());

// Decalre Date
let myCreatedDate = new Date(2024, 1, 2)
console.log(myCreatedDate.toDateString()) // Fri Feb 02 2024

// Decalre Date With Time
let myCreatedDate1 = new Date(2024, 1, 2, 5, 30) // 2/2/2024, 5:30:00 AM
console.log(myCreatedDate1.toLocaleString()) // 2/2/2024, 5:30:00 AM

// Time Stamp
let myTimeStamp = Date.now()
console.log("Time Stamp", myTimeStamp);
console.log("Time Stamp", myCreatedDate.getTime())
console.log("Time Stamp Convert To Second", Math.floor(Date.now() / 1000))

// Get Date
console.log("Year", myDate.getFullYear());
console.log("Month", myDate.getMonth())
console.log("Day", myDate.getDay());
console.log("Time", myDate.getTime())