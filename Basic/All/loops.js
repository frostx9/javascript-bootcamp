for (i = 0; i >= 0; i++) {
  console.log(i);
}

const animal = ["Dog", "Cat", "Tiger"];
for (i = 0; i < animal.length; i++) {
  console.log(i, animal[i]);
}

const name = "Saumya";
for (i = 0; i < name.length; i++) {
  console.log(i, name[i]);
}

const myStudents = [
  {
    firstName: "Zeus",
    grade: 94,
  },

  {
    firstName: "Chaos",
    grade: 99,
  },
];

for (i = 0; i < myStudents.length; i++) {
  console.log(myStudents[i]);
  let student = myStudents[i];
  console.log(`${student.firstName} ${student.grade}`);
}

const str = "LOL";

for (i = 0; i <= 4; i++) {
  console.log("outer", i);
  for (j = 0; j < str.length; j++) {
    console.log("Inner:", str[j]);
  }
}

const b = [2, 3, 5, 6, 7, 9];

console.log(b);

let total = 0;

for (i = 0; i < b.length; i++) {
  if (b[i] % 2 !== 0) {
    total += b[i];
  }
}
console.log(total);

let a = 4;

if (a % 2 === 0) {
  console.log("its a even no");
} else {
  console.log("its a odd no");
}

const getcard = function () {
  const value = ["1", "2", "3", "4", "5"];

  const idx = Math.floor(Math.random() * 4) + 1;

  const value1 = ["K", "J", "L"];

  const idx1 = Math.floor(Math.random() * 4) + 1;

  return { value: value[idx], Card: value1[idx] };
};

getcard();
