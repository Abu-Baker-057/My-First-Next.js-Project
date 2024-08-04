// Name Cases: Store a person’s name in a variable, and
// then print that person’s name titlecase.
// const person = "Abu_Baker_Shad";
const person = "aBu BaKeR sHaD";
console.log("This is titlecase",person.charAt(0).toUpperCase()+person.slice(1).toLowerCase);
console.log(person.charAt(0).toUpperCase());
console.log(person.slice(1).toLowerCase());

console.log("This is a titlecase",person.substr(0, 1).toUpperCase()+person.substr(1).toLowerCase());
let m = person.substr(0, 1).toUpperCase();
console.log("🚀 ~ m:", m)
let n = person.substr(1).toLowerCase();
console.log("🚀 ~ n:", n)
console.log("Titlecase", m + n);