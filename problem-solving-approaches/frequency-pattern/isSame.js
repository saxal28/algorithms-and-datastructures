// =========================
// HOW IT WORKS
// =========================
// create a map(s) that has the quantity of each item (ie: javascript object)
// check to see if quantities in each map match

// ======== Problem ==========
// Write a function isSame, which accepts 2 arrays, that should return true if array 2 is the squared values of array 1

function isSame(arr, squaredArr) {
    const arrayCounter = {}
    const squaredArrayCounter = {}

    // loop through each array and count
    arr.forEach(number => arrayCounter[number] = ((arrayCounter[number] || 0) + 1))
    squaredArr.forEach(number => squaredArrayCounter[number] = (squaredArrayCounter[number] || 0) + 1)

    // loop through the array counter and see if squared value is in there
    for (let key in arrayCounter) {
        const squaredKey = key ** 2

        // if key sqaured is not in squaredArrayCounter, return false
        if (!squaredArrayCounter[squaredKey]) {
            return false
        }
    }

    return true
}

console.log(isSame(
    [1, 2, 3],
    [1, 4, 9]
))