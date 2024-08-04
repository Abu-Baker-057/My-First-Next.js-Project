// Array Filter Method

let array: number[] = [-3, 6, -16, 11, 8, 25];

let even = array.filter((item) => {return item % 2 == 0});
console.log("🚀 ~ even:", even);

let odd = array.filter(item => item % 3 == 0);
console.log("🚀 ~ odd:", odd);