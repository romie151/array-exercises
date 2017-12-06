// Write a function named `addTwoElements` that takes in three arguments: an array, and two values to add to that array. 
// The function should add those two values to the end of the array.

 

// var arr = [1, 2, 3]
// addTwoElements(arr, 4, 5);
// console.log(arr)
// // logs: [1, 2, 3, 4, 5]

function addTwoElements(arr, val1, val2) {
    arr.push(val1,val2)
    return arr
}

console.log(addTwoElements([1, 2, 3, 4, 5], "a", "b"))