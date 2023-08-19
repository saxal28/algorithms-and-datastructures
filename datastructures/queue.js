class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value) { // [1,2,3] // add to end
        const node = new Node(value)

        if (this.size == 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }

        this.size++

        return this
    }

    dequeue() { // 1 -> 2 -> 3 // remove from beginning
        if (this.size == 0) return null
        const currentFirst = this.first

        if (this.size == 1) {
            this.first = null
            this.last = null
        } else {
            const newFirst = this.first.next
            this.first = newFirst
        }

        this.size--

        return currentFirst.value
    }

    get values() {
        var arr = []
        var current = this.first
        while (current) {
            arr.push(current.value)
            current = current.next
        }

        return arr
    }
}

module.exports = Queue