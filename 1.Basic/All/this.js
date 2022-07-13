//Computed Propertise

// const role = "host";
// const person = "XYZ";

// const team = {};
// team[role] = person;
// console.log(team);

// const team1 = {
//   [role]: person,
// };

// console.log(team1);

// _______________________________________
// const person = {
//   first: "ABC",
//   Last: "DEF",
//   nick: "ghi",
//   fullnam() {
//     return `${this.first} ${this.Last} is kown as ${this.nick}`;
//   },

//   bio() {
//     const full = this.fullnam();
//     return `${full} is a person`;
//   },
// };

// console.log(person.fullnam());
// console.log(person.bio());

// ____________________________________________

const animal = {
  nam: ["Dog", "Cat", "Tiger"],
  pcik() {
    const { nam } = this;
    const idx = Math.floor(Math.random() * nam.length);
    return nam[idx];
  },

  starrt() {
    setInterval(() => {
      // return this.pcik();
      console.log(this.pcik());
    }, 1000);
  },

  again() {
    setInterval(() => {
      console.log(this.pcik());
    }, 1000);
  },
};

// console.log(animal.starrt());
console.log(animal.again());
