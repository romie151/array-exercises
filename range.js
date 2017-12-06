// Write a function range that takes two numbers as arguments: min and max. 
// The function will return and array with all the numbers, inclusive, between min and max.

// range(2, 6)
// // => [2, 3, 4, 5, 6]

function range (min, max) {
    var arr = []
    for (var i = min; i <= max; i++) {
        arr.push(i) 
    }
    return arr
}

console.log(range(1, 4))