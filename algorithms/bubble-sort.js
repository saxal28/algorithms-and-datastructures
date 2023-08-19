// BUBBLE SORT

// =========================
// HOW IT WORKS
// =========================
// the largest elements move to the back
// -- it compares two elements at a time, [x, y]...if x > y, x trades indexes with y

// VISUAL EXAMPLE---one sort
// [1,5,2,3]
// compare 1 and 5... 1 is smaller so do nothing...move to next i
// [1,5,2,3]
// compare 5 and 2....5 is larger so swap indexes
// [1,2,5,3]
// compare 5 and 3...5 is larger so swap index
// [1,2,3,5]

function bubbleSort(array) {

    function swap(indexOne, indexTwo) {
        const temp = array[indexOne]
        array[indexOne] = array[indexTwo]
        array[indexTwo] = temp
    }

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            var elementOne = array[j]
            var elementTwo = array[j + 1]

            if (elementTwo == null) {
                // console.log("end of array...repeat")
            } else if (elementOne > elementTwo) {
                // console.log("swap", elementOne, elementTwo)
                swap(j, j + 1)
            }
        }
    }

    return array
}

// OPTIMIZATION
// optimization is to decrement the top i loop...the j loop will run 1 less index every iteration
// also check if have swapped in current pass....if no, return

function optimizedBubbleSort(array) {

    function swap(indexOne, indexTwo) {
        const temp = array[indexOne]
        array[indexOne] = array[indexTwo]
        array[indexTwo] = temp
    }

    var noSwaps = true

    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            var elementOne = array[j]
            var elementTwo = array[j + 1]

            if (elementOne > elementTwo) {
                swap(j, j + 1)
                noSwaps = false
            }
        }

        if (noSwaps) break
    }

    return array
}

module.exports = {
    bubbleSort,
    optimizedBubbleSort
}