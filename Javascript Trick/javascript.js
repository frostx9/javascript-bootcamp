// Object Remove from array

const apps = [
  { id: 1, name: 'Jon' },
  { id: 2, name: 'Dave' },
  { id: 3, name: 'Joe' }
]

//remove item with id=2
const itemToBeRemoved = { id: 2, name: 'Dave' }

apps.splice(apps.findIndex(a => a.id === itemToBeRemoved.id), 1)

console.log(apps) // [ { id: 1, name: 'Jon' }, { id: 3, name: 'Joe' } ]


// Update an Object's Property in Array of Objects in JS

const arr2 = [
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

for (const obj of arr2) {
  if (obj.id === 1) {
    obj.name = 'Alfred';

    break;
  }
}