// Write a function `middleElement` that takes an array as an argument and returns the middle element of that array. 
// If the array has an even number of elements, the function should return "Oops, there's no middle..."


// middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']);
//  // returns 'bat'

// middleElement([1, 2, 3, 4, 5]); 
// // returns 3

// middleElement([1, "hmm", "wat", 4, 5]); 
// // returns "wat"

// middleElement([1, 2, 3, 4, 5, 6]); 
// // returns "Oops, there's no middle"

// middleElement(["john", "paul", "george", "ringo"]); 
// // returns "Oops, there's no middle"

function middleElement (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.length % 2 !== 0) {
            return  arr[Math.floor(arr.length / 2)]+ " Its Odd"
        } else {
            return "Oops, there is no middle..."
        }
    }
}

console.log(middleElement([1, 2, 3, 4, 5]))