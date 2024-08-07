// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.” not but
let trans = ["Cycle", "Motor", "Car", "Bus", "Dewo", "Truck"];
// for(let i = 0; i < trans.length; i++) {
//     console.log(`I would like to own a ${trans[i]}`);
// }
trans.map(items => console.log(`"I would like to own a ${items}."`));
export {};
