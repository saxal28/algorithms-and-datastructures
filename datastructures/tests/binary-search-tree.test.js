const BinarySearchTree = require("../binary-search-tree");

test("Can add a Root Node to a Binary Search Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(10)
    binarySearchTree.insert(6)
    binarySearchTree.insert(8)

    expect(binarySearchTree.root.value).toStrictEqual(10);
    expect(binarySearchTree.root.left.value).toStrictEqual(6);
    expect(binarySearchTree.root.left.right.value).toStrictEqual(8);

    //       10
    //     |    |
    //     6
    //   |   |  
    //       8
});

test("Can add create a left only Binary Search Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(10)
    binarySearchTree.insert(9)
    binarySearchTree.insert(8)
    binarySearchTree.insert(7)
    binarySearchTree.insert(6)

    expect(binarySearchTree.root.value).toStrictEqual(10);
    expect(binarySearchTree.root.left.value).toStrictEqual(9);
    expect(binarySearchTree.root.left.left.value).toStrictEqual(8);
    expect(binarySearchTree.root.left.left.left.value).toStrictEqual(7);
    expect(binarySearchTree.root.left.left.left.left.value).toStrictEqual(6);
});

test("Can add create a right only Binary Search Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(6)
    binarySearchTree.insert(7)
    binarySearchTree.insert(8)
    binarySearchTree.insert(9)
    binarySearchTree.insert(10)

    expect(binarySearchTree.root.value).toStrictEqual(6);
    expect(binarySearchTree.root.right.value).toStrictEqual(7);
    expect(binarySearchTree.root.right.right.value).toStrictEqual(8);
    expect(binarySearchTree.root.right.right.right.value).toStrictEqual(9);
    expect(binarySearchTree.root.right.right.right.right.value).toStrictEqual(10);
});

test("Can add create a root, parent with 2 child nodes Binary Search Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(10)
    binarySearchTree.insert(20)
    binarySearchTree.insert(18)
    binarySearchTree.insert(21)

    expect(binarySearchTree.root.value).toStrictEqual(10);
    expect(binarySearchTree.root.right.value).toStrictEqual(20);
    expect(binarySearchTree.root.right.left.value).toStrictEqual(18);
    expect(binarySearchTree.root.right.right.value).toStrictEqual(21);

    //                10
    //         |             |
    //                       20
    //                   |       |
    //                   18      21
});

test("Can add create a root, parent with 2 child nodes Binary Search Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(10)
    binarySearchTree.insert(20)
    binarySearchTree.insert(18)
    binarySearchTree.insert(21)

    expect(binarySearchTree.find(18)).toStrictEqual(true);
    expect(binarySearchTree.find(28)).toStrictEqual(false);
    expect(binarySearchTree.find(2800)).toStrictEqual(false);
    expect(binarySearchTree.find(20)).toStrictEqual(true);
});

test("Breadth First Search on a Binary Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(10)
    binarySearchTree.insert(15)
    binarySearchTree.insert(20)
    binarySearchTree.insert(6)
    binarySearchTree.insert(8)
    binarySearchTree.insert(3)

    expect(binarySearchTree.breadthFirstSearch()).toStrictEqual([
        10, 6, 15, 3, 8, 20
    ]);
});

test("Depth First Search | PreOrder on a Binary Tree", () => {
    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.insert(10)
    binarySearchTree.insert(15)
    binarySearchTree.insert(20)
    binarySearchTree.insert(6)
    binarySearchTree.insert(8)
    binarySearchTree.insert(3)

    expect(binarySearchTree.depthFirstSearchPreOrder()).toStrictEqual([
        10, 6, 3, 8, 15, 20
    ]);
});