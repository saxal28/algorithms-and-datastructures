// ====================================
// RECURSION EXAMPLE 1: FACTORIAL
// ====================================

function factorial(currentValue) {
    if (currentValue == 0) return 1
    return currentValue *= factorial(currentValue - 1)
}

console.log(factorial(7)) // 5040 -> 7 x 6 x 5 x 4 x 3 x 2 x 1

// ====================================
// RECURSION EXAMPLE 2: Recursive Range / Helper method
// ====================================

function recursiveRange(number) {
    var sum = 0

    function helper(currentNumber) {
        if (currentNumber == 0) return
        sum += currentNumber
        helper(currentNumber - 1)
    }

    helper(number)

    return sum
}

console.log(recursiveRange(10)) // 55
