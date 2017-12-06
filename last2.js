// Write a function `withoutLastTwo` that takes an array as an argument 
// and returns a copy of the array without the last two elements. 
// If the original array is two elements or less, the function should return an empty array.


// removeLastTwo(['dog', 'cat', 'bat', 'octopus']); 
// // returns ['dog', 'cat']

function withoutLastTwo (arr) {
    if(arr.length > 2) {
        arr.pop(arr.length - 1, arr.length -2)
        return arr
    } else {
        var newArr = []
        return newArr
    }
    
}

console.log(withoutLastTwo(['dog', 'cat', 'bat', 'octopus']))
console.log(withoutLastTwo(['dog', 'cat']))