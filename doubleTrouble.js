// Write a function named `doubleTrouble` that takes in an array of numbers as an argument. 
// The function should return a new array that doubles every number from the original array. 


// doubleTrouble([1, 2, 3]); 
// // returns [2, 4, 6]
// doubleTrouble([10, 8, 5]);
// // returns [20, 16, 10]

function doubleTrouble (arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i] * 2
        newArr.push(a) 
        
    }
    return newArr
}
console.log(doubleTrouble([1, 2, 3, 4]))