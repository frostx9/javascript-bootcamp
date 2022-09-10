// Compute Propertise

const role = 'host'
const person = 'Toms Holand'

// const team = {}
// team[role] = person

const team = {
  [role]: person,
  [1 + 6 + 9]: "Sixteen"   // [1 +6 + 9] = evaluate first , and tern into string then it act as a key 
}

console.log(team);

const addMore = (obj, k, v) => {
  return { ...obj, [k]: v }
}

// Dont retturn like this - { ...obj, [k]: v } in one line
//const addMore = (obj, k, v) => { ...obj, [k]: v }..Javascipt will take as function
//Wrap in to ()... -> ({ ...obj, [k]: v })
console.log(addMore(team, "Happy", ":)"));