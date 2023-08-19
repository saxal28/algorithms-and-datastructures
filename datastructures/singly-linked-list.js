class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// ==============================
// VISUAL REPRESENTATION
// ==============================
// var first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(value) {
        const newNode = new Node(value)

        // assigning same object to head and tail
        // tail object is mutated, which is why the head keeps the chain
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode // this was originally the head node, keeps mutating
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        } else {
            var current = this.head
            var previous = null

            // get second to last and last item in linked list
            while (current.next) {
                previous = current
                current = current.next
            }

            // set previous to tail and remove last item (next)
            this.tail = previous
            previous.next = null
            this.length--

            if (this.length == 0) {
                this.head = null
                this.tail = null
            }

            return current
        }
    }

    shift() {
        if (this.length == 0) return undefined

        const currentHead = this.head
        this.head = this.head.next
        this.length--

        if (this.length == 0) {
            this.tail = null
        }

        return currentHead
    }

    unshift(value) {
        const newNode = new Node(value)

        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            const currentHead = this.head
            newNode.next = currentHead
            this.head = newNode
        }

        this.length++

        return this
    }

    print() {
        var current = this.head
        var list = []
        while (current != null) {
            list.push(current.value)
            current = current.next
        }

        console.log("linked list | " + list.join(" -> "))
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        var current = this.head
        var currentIndex = 0

        while (current != null) {
            if (currentIndex == index) {
                return current
            } else {
                current = current.next
                currentIndex++
            }
        }
    }

    set(index, value) {
        const foundNode = this.get(index)

        if (foundNode) {
            foundNode.value = value
            return true
        } else {
            return false
        }
    }

    insert(index, value) {
        if (value < 0 || value > this.length) return false

        if (index == 0) {
            this.unshift(value)
        } else if (index == this.length) {
            this.push(value)
        } else {
            const newNode = new Node(value)
            const previousNode = this.get(index - 1)
            const currentNodeAtIndex = this.get(index)

            previousNode.next = newNode
            newNode.next = currentNodeAtIndex
        }

        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (this.length - 1 == index) return this.pop()
        if (index == 0) return this.shift()

        const nodeAtIndex = this.get(index)
        const nextNode = nodeAtIndex.next
        const previousNode = this.get(index - 1)

        // previous node -> node at index -> next node
        // previous node -> next node

        previousNode.next = nextNode
        this.length--
        return nodeAtIndex
    }

    reverse() {
        // =======================
        // HOW THIS WORKS
        // =======================
        // swap head and tail
        // set initial node to head
        // loop through list
        // set *next* to current node.next
        // set *node* next to previous
        // set *previous* to current node

        var node = this.head
        this.head = this.tail
        this.tail = node

        var previous = null
        var next = null

        for (var i = 0; i < this.length; i++) {
            next = node.next
            node.next = previous
            previous = node
            node = next
        }

        return this
    }

    get values() {
        var current = this.head
        var list = []
        while (current != null) {
            list.push(current.value)
            current = current.next
        }

        return list
    }
}

module.exports = SinglyLinkedList