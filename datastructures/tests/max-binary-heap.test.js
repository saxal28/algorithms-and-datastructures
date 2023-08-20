const MaxBinaryHeap = require("../max-binary-heap");

test("Can add a Root Node to a Binary Search Tree", () => {
    const maxBinaryHeap = new MaxBinaryHeap()

    maxBinaryHeap.insertAll([
        41, 39, 33, 18, 27, 12, 55
    ])

    expect(maxBinaryHeap.values).toStrictEqual([
        55, 39, 41, 18, 27, 12, 33
    ]);
});

test("Can add a Root Node to a Binary Search Tree", () => {
    const maxBinaryHeap = new MaxBinaryHeap()
    maxBinaryHeap.insertAll([
        70, 67, 65, 45, 58, 40, 53, 44, 15, 31
    ])

    const max = maxBinaryHeap.extractMax()

    expect(maxBinaryHeap.values).toStrictEqual([
        67, 58, 65, 45, 31, 40, 53, 44, 15
    ]);

    expect(max).toStrictEqual(70)
});