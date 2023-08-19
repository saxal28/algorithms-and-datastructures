// =========================
// HOW IT WORKS
// =========================
// use highter / lower pointer 
// if sum is too high, make smaller by decreasing right pointer
// if sumer is too low, make bigger by increasing left pointer

// Write a function sumZero where you find the first pair where the sum is 0 -> assume is ordered array
// return pair or undefined if not found

// start from beginning and end
function sumZero(arr) {
    var leftPointer = 0
    var rightPointer = arr.length - 1

    while (leftPointer < rightPointer) {
        const currentSum = arr[leftPointer] + arr[rightPointer]
        if (currentSum == 0) {
            return [arr[leftPointer], arr[rightPointer]]
        } else if (currentSum > 0) {
            // make it smaller
            rightPointer--
        } else {
            // make it bigger
            leftPointer++
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1])) // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) // [-2, 2]