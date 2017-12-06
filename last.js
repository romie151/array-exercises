// Write a function that takes an array as an argument, 
// and returns a copy of the array with the last element at the front. 


// var arr = [1, 2, 3, 4]
// lastToFront(arr); 
// // returns [4, 1, 2, 3]

function arr (arr) {
    arr.unshift(arr.pop())
    return arr
}

console.log(arr([1, 2, 3, 4]))