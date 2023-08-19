// =========================
// HOW IT WORKS
// =========================
// Break down array when searching, based on if the left pointer is larger or smaller than the middle.
// If the left pointer is smaller than the middle, set the left pointer to the middle and reset middle pointer
// If the right pointer is larger than the middle, set the right pointer to the middle and reset middle pointer
// If middle pointer == target value == good

function binarySearch(arr, targetValue) {
    var left = 0
    var right = arr.length - 1
    var middle = Math.round((right + left) / 2)

    while (left < middle) {
        var currentMiddleValue = arr[middle]

        if (currentMiddleValue == targetValue) {
            return middle
        } else if (currentMiddleValue < targetValue) {
            left = middle
            middle = Math.round((right + left) / 2)
        } else {
            right = middle
            middle = Math.round((right + left) / 2)
        }
    }

    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))// 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1