// =========================
// HOW IT WORKS
// =========================
// Use 2 pointers to move values
// sometimes start and end pointers

// ASK
// count number of unique values in an array

// EXPLANATION
// loop over array, if currentIndexNumber != number, increment count and set index number

function countUniqueValues(arr) {
    var count = 0
    var currentIndexNumber = 0

    arr.forEach((number, index) => {
        if (currentIndexNumber != number) {
            currentIndexNumber = number
            count += 1
        }
    })

    return count
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4