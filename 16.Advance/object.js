// getOwnPropertyDescriptor Give Full Description of A Method

const desriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desriptor);



const menu = {
  name: "Biyrani",
  price: 250,
  isAvailable: true,
  order: function () {
    console.log("Aminia");
  }
}

console.log(Object.getOwnPropertyDescriptor(menu, "price")); // { value: 250, writable: true, enumerable: true, configurable: true }

// Loop On Object
for (let [key, value] of Object.entries(menu)) {
  if (typeof value !== 'function') { // To Not Print Function
    console.log(`${key} : ${value}`);
  }
}

// To Set Un Changeable
Object.defineProperty(menu, "price", {
  writable: false, // To Stop Change Data
  enumerable: false  // To Stop Part Loop
})

console.log(Object.getOwnPropertyDescriptor(menu, "price")); // { value: 250, writable: false, enumerable: false, configurable: true }

for (let [key, value] of Object.entries(menu)) {
  if (typeof value !== 'function') { // To Not Print Function
    console.log(`${key} : ${value}`);
  }
}