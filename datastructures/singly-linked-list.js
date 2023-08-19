// ======================================
// Singly Linked List
// ======================================

// A data structure that contains a head, tail, and length property. 
// Liked lists consist of nodes, each node has a value and pointer to another node or null. 
// Each node is only connected in one direction to the next node.


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
}

const linkedList = new SinglyLinkedList()
linkedList.push("hi")
linkedList.push("there")
linkedList.push("guy")

linkedList.print()

console.log("shift | " + linkedList.shift()?.value)

linkedList.print()

console.log("unshift | " + linkedList.unshift("yo"))
console.log("unshift | " + linkedList.unshift("yarg"))
console.log("unshift | " + linkedList.unshift("butt"))

linkedList.print()
console.log("get index | " + linkedList.get(1)?.value)
console.log("get index | " + linkedList.get(2)?.value)
console.log("get index | " + linkedList.get(4)?.value)

linkedList.print()

console.log("set index | ", linkedList.set(1, "alan"))
console.log("set index | ", linkedList.set(4, "dude"))

linkedList.print()

console.log("insrt index | ", linkedList.insert(4, "sax"))

linkedList.print()


  // console.log(linkedList.pop())
  // console.log(linkedList)