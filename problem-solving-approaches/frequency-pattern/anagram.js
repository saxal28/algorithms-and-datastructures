// =========================
// HOW IT WORKS
// =========================
// create a map(s) that has the quantity of each item (ie: javascript object)
// check to see if quantities in each map match

// ASK:
// does one string have the same letters as the other string?
// EDGECASES:
// - account for empty strings?
// - account for same length?
// - account for casing?

function getFrequency(word) {
    const counter = {}
    for (let letter of word.split("")) {
        counter[letter] = (counter[letter] || 0) + 1
    }

    return counter
}

// 3 loops
function validAnagram(originalWord, jumbledWord) {
    if (originalWord.length != jumbledWord.length) return false

    const originalWordCounter = getFrequency(originalWord)
    const jumbledWordCounter = getFrequency(jumbledWord)

    // loop over original word counter
    // see if key and values are equal

    for (let key in originalWordCounter) {
        if (originalWordCounter[key] !== jumbledWordCounter[key]) {
            return false
        }
    }

    return true
}

// 2 loops
function validAnagramOptimized(originalWord, jumbledWord) {
    if (originalWord.length != jumbledWord.length) return false

    const originalWordCounter = getFrequency(originalWord)

    for (let key of jumbledWord.split("")) {
        if (!originalWordCounter[key]) {
            return false
        } else {
            originalWordCounter[key]--
        }
    }

    return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

console.log("====================")

console.log(validAnagramOptimized('', '')) // true
console.log(validAnagramOptimized('aaz', 'zza')) // false
console.log(validAnagramOptimized('anagram', 'nagaram')) // true
console.log(validAnagramOptimized("rat", "car")) // false) // false
console.log(validAnagramOptimized('awesome', 'awesom')) // false
console.log(validAnagramOptimized('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagramOptimized('qwerty', 'qeywrt')) // true
console.log(validAnagramOptimized('texttwisttime', 'timetwisttext')) // true