// Write a function `everyThird` that takes an array as an argument 
// and returns a new array that contains every third element of the original array.


// everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']); 
// // returns ['c','f','i']

// everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) 
// // returns [ 3, 6, 9, 12 ]

function everyThird (arr) {
    var newArr = []
    for (var i = 2; i < arr.length; i+= 3) {
        newArr.push(arr[i]) 
    }
    return newArr
}

console.log(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
console.log(everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))