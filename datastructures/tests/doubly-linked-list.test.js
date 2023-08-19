const DoublyLinkedList = require("../doubly-linked-list")

test("Can Push to a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hi")
    expect(list.length).toStrictEqual(1);
})

test("Can Pop a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")
    const removed = list.pop()
    expect(list.length).toStrictEqual(1);
    expect(removed.value).toStrictEqual("world");
})

test("Can Shift a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")
    const removed = list.shift()
    expect(list.length).toStrictEqual(1);
    expect(removed.value).toStrictEqual("hello");
})

test("Can Unshift a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")
    list.unshift("yes")
    expect(list.length).toStrictEqual(3);
    expect(list.get(0).value).toStrictEqual("yes");
})

test("Can Get a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")
    list.push("yes")
    const foundNode = list.get(1)
    expect(foundNode.value).toStrictEqual("world");
})

test("Can Set a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")
    list.push("yes")

    const result = list.set(1, "worldd")
    expect(result).toStrictEqual(true);
    expect(list.get(1).value).toStrictEqual("worldd");
})

test("Can Insert a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")

    const result = list.insert(1, "fuckin")
    expect(result).toStrictEqual(true);
    expect(list.get(1).value).toStrictEqual("fuckin");
})

test("Can Delete from a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push("hello")
    list.push("world")

    list.insert(1, "fuckin")

    const removed = list.remove(1)

    expect(removed?.value).toStrictEqual("fuckin");
    expect(list.length).toStrictEqual(2);
})

test("Can Reverse a Doubly Linked List", () => {
    const list = new DoublyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)

    list.reverse()

    expect(list.values).toStrictEqual([5, 4, 3, 2, 1]);
})