class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    // push to end....bubble up
    enqueue(value, priority) {
        const node = new Node(value, priority)
        this.values.push(node)

        this.bubbleUp()
    }

    bubbleUp() {
        // check if parent is less than value
        var index = this.values.length - 1

        while (true) { //while there is a parent...continue to bubble up
            var parentIndex = Math.floor((index - 1) / 2)
            const currentValue = this.values[index]
            const parentValue = this.values[parentIndex]

            if (!parentValue || currentValue.priority > parentValue.priority) return

            this.values[parentIndex] = currentValue
            this.values[index] = parentValue

            index = parentIndex
        }
    }

    dequeue() {
        const mostImportant = this.values[0]
        const last = this.values[this.values.length - 1]
        this.values[0] = last
        this.values.pop()
        // trickle down
        this.trickleDown()

        return mostImportant
    }

    trickleDown() {
        // check if child nodes have higher priority (lower)
        var index = 0
        while (true) {
            var leftChildIndex = index * 2 + 1
            var rightChildIndex = index * 2 + 2
            var leftChildValue = this.values[leftChildIndex]
            var rightChildValue = this.values[rightChildIndex]
            var currentValue = this.values[index]

            if (!leftChildValue && !rightChildValue) return

            if (currentValue.priority > leftChildValue.priority || currentValue.priority > rightChildValue.priority) {
                if (leftChildValue > rightChildValue) {
                    // swap left child and current value
                    this.values[index] = leftChildValue
                    this.values[leftChildIndex] = currentValue
                    index = leftChildIndex
                } else {
                    this.values[index] = rightChildValue
                    this.values[rightChildIndex] = currentValue
                    index = rightChildIndex
                }
            } else {
                return
            }
        }
    }

    get stringValues() {
        return this.values.map(it => it.value)
    }
}

module.exports = PriorityQueue