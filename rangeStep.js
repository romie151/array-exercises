// Write a function rangeWithStep that takes three numbers as arguments: min, max and step. 
// The function will return and array with all the numbers, inclusive, between min and max,
// going up in increments equal to step. If no step value is provided, the increment will be 1.

// rangeWithStep(4, 10, 2)
// // => [4, 6, 8, 10]
// rangeWithStep(4, 10)
// // => [4, 5, 6, 7, 8, 9, 10]

function rangeWithStep(min, max, step) {
    var arr = []
    for (var i = min; i <= max; i+= step) {
        arr.push(i) 
    }
    return arr
}

console.log(rangeWithStep(0, 10, 3))

