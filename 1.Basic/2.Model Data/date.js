let myDate = new Date()

console.log("My Current Date", myDate); // Date is A Object . Ans - 2024-08-14T17:00:40.611Z

// Convert To String
console.log("My Current Date To String 1", myDate.toString()); // Ans - Wed Aug 14 2024 22:30:40 GMT+0530 (India Standard Time)

console.log("My Current Date To String 2", myDate.toDateString()); // Ans - Wed Aug 14 2024

console.log("My Current Date To String 3", myDate.toLocaleString()); // Ans - 8/14/2024, 10:30:40 PM

console.log("My Current Date To String 4", myDate.toLocaleDateString()); // Ans - 8/14/2024

// Decalre Date
let myCreatedDate = new Date(2024, 1, 2)
console.log(myCreatedDate.toDateString()) // Fri Feb 02 2024

// Decalre Date With Time
let myCreatedDate1 = new Date(2024, 1, 2, 5, 30) // 2/2/2024, 5:30:00 AM
console.log(myCreatedDate1.toLocaleString()) // 2/2/2024, 5:30:00 AM

// Time Stamp
let myTimeStamp = Date.now()
console.log("Time Stamp", myTimeStamp); // 1723655424180 . Milisecond value From 1970 Jan 1
console.log("Time Stamp", myCreatedDate.getTime())
console.log("Time Stamp Convert To Second", Math.floor(Date.now() / 1000))

// Get Date
console.log("Year", myDate.getFullYear());
console.log("Month", myDate.getMonth())
console.log("Day", myDate.getDay()); // 3 - Wednesday
console.log("Time", myDate.getTime())

// New Method Date Proposal  - Temporal