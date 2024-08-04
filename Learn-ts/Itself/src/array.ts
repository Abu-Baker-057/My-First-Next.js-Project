let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// console.log(a[0]);

// Pop method
// ===========
// Removes the last element from an array and returns the new length of the array.
// If the array is empty, undefined is returned and the array is not modified.

// a.pop();
// console.log(a);

// console.log(a.pop());


// Push method
// ============
// Appends new elements to the end of an array, and returns the new length of the array.
// @param items — New elements to add to the array.

// a.push(0);
// console.log(a);

// a.push(17);
// console.log(a);

// let num = 18;
// a.push(num);
// console.log(a);


// Shift Method
// ============
// Removes the first element from an array and returns the new length of the array.
// If the array is empty, undefined is returned and the array is not modified.

// a.shift();
// console.log(a);

// console.log(a.shift());


// Unshift Method
// ==============
// Inserts new elements at the start of an array, and returns the new length of the array.
// @param items — Elements to insert at the start of the array.

// a.unshift(87);
// console.log(a);

// console.log(a[0]);

// let num1 = 32;
// a.unshift(num1);
// console.log(a);


// Splice Method
// =============
// delete all away elements(including passes index), which passes you index/value and return new array,
// (Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.)

// a.splice(4);
// console.log(a);

// a.splice(3,5);
// console.log(a);

// console.log(a.splice(4));

// console.log(a);
// console.log(a);


// Slice Method
// ============
// delete all before elements(dosn't including passes index), which passes you index/value and it return previous array, not new array
// work on its single line


// console.log(a.slice(3));

// console.log(a.slice(3,1));   // its incorrect for this time

// a.slice(3);  useless because array is not updated
// console.log(a);  return previous array

// console.log(a);
// console.log(a);


// Delete Method
// ==============
// delete element on passes index address and created hole on this index

// delete a[4];
// console.log(a);

// console.log(delete a[90]);  // no/gain concept


// Length Method
// ==============
// By using this method get length of your's array

// console.log(a.length);

// let size = a.length;
// console.log(size);


// String Method
// ==============
// converts an array to a string of (comma separated) array values.

// console.log(a.toString());

// let con = a.toString();
// console.log(con);


// At Method
// ==========
// returns an indexed element from an array or returns the same as [].

console.log(a.at(2));

let num2 = a.at(2);
console.log(num2);

let num3 = a[5];
console.log(num3);

/*Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.

This is not possible in JavaScript, because [] is used for accessing both arrays and objects.
obj[-1] refers to the value of key -1, not to the last property of the object.

The at() method was introduced in ES2022 to solve this problem.*/


// Join Method
// ============
// joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// console.log(a.join(" _ "));

// let sep = a.join(" * ");
// console.log(sep);


// Changing Element
// ================
// Array elements are accessed using their index number

// console.log(a);
// console.log(a[0]);

// a[0] = 19, a[1] = 18;

// console.log(a[0]);
// console.log(a);


// 
// ====================
// let abc = (a[a.length] = 687);
// console.log(abc);

// console.log(a[a.length] = 789);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);
// fruits[fruits.length] = "Kiwi";
// console.log(fruits[fruits.length] = "Kiwi");
// console.log(fruits);



// 1 2 3 4 5 6 7 8 9 10

export {}
