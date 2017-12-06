// Write a function named `longestArr` that takes in two arrays as arguments. 
// The function should compare the length of the two arrays and return whichever array is longer 
// (aka whichever array has more values in it). 
// If the lengths of the two arrays are equal, then return null.


// longestArr([1, 2, 3], [1, 2, 3, 4, 5]); 
// // returns [1, 2, 3, 4, 5]

// longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// // returns ["jets", "mets", "giants", "yankees"]

function longestArr(arr1, arr2) {
    if (arr1.length  > arr2.length) {
        return arr1
    } else if (arr2.length > arr1.length) {
        return arr2
    } else if (arr1.length === arr2.length) {
        return null
    }
}

console.log(longestArr([1, 2, 3], [1, 2, 3]))