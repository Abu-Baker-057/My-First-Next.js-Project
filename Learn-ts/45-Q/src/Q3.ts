// Name Cases: Store a person’s name in a variable, and
// then print that person’s name in lowercase, uppercase, and titlecase.

const person = "ArTiFiCaL"

console.log("Orignal",person);

console.log("This is lowercase:",person.toLowerCase());

console.log("This is uppercase:",person.toUpperCase());

let n1 = person.charAt(0).toUpperCase();
let n2 = person.slice(1).toLowerCase();

// let n1 = person.substr(0, 1).toUpperCase();
// let n2 = person.substr(1).toLowerCase();

console.log("This is titlecase:", n1 + n2);

export {}
