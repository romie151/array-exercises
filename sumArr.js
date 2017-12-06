// Write a function `sumArray` that takes as argument an array of numbers and returns the sum of all these numbers.

 

// sumArray([1, 2, 3, 4, 5, 6])
// // returns 21

// sumArray([1, 2, 3, 4, 5, -6]) 
// // returns 15

function sumArray (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([ 1, 2, 3, 4]))