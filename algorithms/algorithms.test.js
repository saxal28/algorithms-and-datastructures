const { bubbleSort, optimizedBubbleSort } = require("./bubble-sort");
const binarySearch = require("./binary-search");

test("Bubble Sort Works", () => {
    expect(bubbleSort([1, 5, 2, 3])).toStrictEqual([1, 2, 3, 5]);
    expect(bubbleSort([6, 5, 2, 4, 3, 6, 7, 8, 9, 6, 5, 4, 3, 1])).toStrictEqual([
        1, 2, 3, 3, 4, 4,
        5, 5, 6, 6, 6, 7,
        8, 9
    ]);
});

test("Optimized Bubble Sort Works", () => {
    expect(optimizedBubbleSort([1, 5, 2, 3])).toStrictEqual([1, 2, 3, 5]);
    expect(optimizedBubbleSort([6, 5, 2, 4, 3, 6, 7, 8, 9, 6, 5, 4, 3, 1])).toStrictEqual([
        1, 2, 3, 3, 4, 4,
        5, 5, 6, 6, 6, 7,
        8, 9
    ]);
});

test("Binary Search Works", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toStrictEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toStrictEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toStrictEqual(4);
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).toStrictEqual(2);
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).toStrictEqual(16);
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).toStrictEqual(-1);
});