const SinglyLinkedList = require("./singly-linked-list")


test("Can Reverse a Linked List", () => {
    const singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.unshift(1)
    singlyLinkedList.push(2)
    singlyLinkedList.push(3)
    singlyLinkedList.push(4)
    singlyLinkedList.push(5)

    singlyLinkedList.reverse()

    expect(singlyLinkedList.values).toStrictEqual([5,4,3,2,1]);
})