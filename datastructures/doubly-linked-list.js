// HOW THIS WORKS
// the node links to both the node before and after it
// a <- b -> c

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++

        return this
    }

    pop() {
        if (this.length == 0) return undefined

        const poppedNode = this.tail
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.previous
            this.tail.next = null
            poppedNode.previous = null // need to remove both connections so that we dont return this
        }

        this.length--

        return poppedNode
    }

    shift() { // remove from beginning
        if (this.length == 0) return undefined
        var deletedNode = this.head

        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            var nextNode = deletedNode.next
            nextNode.previous = null
            deletedNode.next = null
            this.head = nextNode
        }

        this.length--

        return deletedNode
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        var current = this.head
        var currentIndex = 0
        while (current) {
            if (index == currentIndex) return current
            current = current.next
            currentIndex++
        }
    }

    unshift(value) {
        const newNode = new Node(value)

        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            const currentHead = this.head
            currentHead.previous = newNode

            newNode.next = currentHead
            this.head = newNode
        }

        this.length++
        return this
    }

    set(index, value) {
        if (index > this.length || index < 0) return false
        this.get(index).value = value
        return true
    }

    insert(index, value) {
        if (index > this.length - 1 || index < 0) return false
        if (this.length == 0) return !!this.unshift(value)
        if (value == this.length - 1) return !!this.push(value)

        const newNode = new Node(value)
        const nodeAtIndex = this.get(index)
        const previousNode = nodeAtIndex.previous

        previousNode.next = newNode

        newNode.previous = previousNode
        newNode.next = nodeAtIndex

        nodeAtIndex.previous = newNode

        this.length++

        return true
    }

    remove(index) {
        if (index > this.length || index < 0) return undefined
        if (index == 0) return this.shift()
        if (index == this.length - 1) return this.pop()

        const nodeToRemove = this.get(index)
        const previousNode = nodeToRemove.previous
        const nextNode = nodeToRemove.next

        previousNode.next = nextNode
        nextNode.previous = previousNode

        nodeToRemove.next = null
        nodeToRemove.previous = null

        this.length--

        return nodeToRemove
    }

    get values() {
        var arr = []
        var current = this.head
        while (current) {
            arr.push(current.value)
            current = current.next
        }

        return arr
    }

    print() {
        return this.values.join("->")
    }

    reverse() {
        const initialHead = this.head
        const initialTail = this.tail

        this.head = initialTail
        this.tail = initialHead

        for (var i = 0; i < this.length; i++) {
            const currentNode = this.get(i)
            const previousNode = currentNode.previous
            const nextNode = currentNode.next

            currentNode.next = previousNode
            currentNode.previous = nextNode
        }
    }
}

module.exports = DoublyLinkedList