// HOW IT WORKS
// uses a singly linked list to add / remove to queue

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value) { // add to first
        const newFirst = new Node(value)

        if (this.size == 0) {
            this.first = newFirst
            this.last = newFirst
        } else {
            const oldFirst = this.first

            this.first = newFirst
            this.first.next = oldFirst
        }

        return this.size++
    }

    get(index) {
        if (index < 0 || index > this.size) return null
        var currentNode = this.first
        var currentIndex = 0
        while (currentNode) {
            if (currentIndex == index) return currentNode
            currentNode = currentNode.next
            currentIndex++
        };
    }

    pop() { // remove first
        const elementToRemove = this.first

        if (this.size == 0) return null
        if (this.size == 1) {
            this.first = null
            this.last = null
        } else {
            const newFirst = elementToRemove.next
            this.first = newFirst
            elementToRemove.next = null
        }

        if (this.first == this.last) {
            this.last = null
        }

        this.size--

        return elementToRemove.value
    }
}

module.exports = Stack