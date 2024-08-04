// Array Maping Method

let counts: number[] = [3, 6, 7, 10, 16, 17, 21]

// for data transformation
// not effect parent array
// return new Array
// return same length of array which length of parent array 

let check = counts.map((item) => {
    return item * item
})
console.log("🚀 ~ check ~ check:", check)

let check_ = counts.map(item => item * item)
console.log("🚀 ~ check_:", check_)
