class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return (2 * index) + 1
    }

    getRightChildIndex(index) {
        return this.getLeftChildIndex(index) + 1
    }

    swap(index, parentIndex) {
        const currentValue = this.values[index]
        const parentValue = this.values[parentIndex]

        this.values[parentIndex] = currentValue
        this.values[index] = parentValue

        return parentIndex
    }

    bubbleUp() {
        var index = this.values.length - 1
        while (true) {
            var parentIndex = this.getParentIndex(index) // new index
            const doesNotHaveParent = parentIndex < 0
            const parentIsGreaterThanChild = this.values[parentIndex] > this.values[index]

            if (doesNotHaveParent || parentIsGreaterThanChild) return
            index = this.swap(index, parentIndex)
        }
    }

    // ========================
    // HOW IT WORKS
    // ========================
    // push a value to the array...bubble up
    // -- push element...check to see if parent is larger or smaller
    // ---- if smaller -> stay
    // ---- if larger -> swap and repeat
    insert(value) {
        this.values.push(value)
        this.bubbleUp()
    }

    insertAll(values) {
        values.forEach(element => {
            this.insert(element)
        });
    }

    // ========================
    // HOW IT WORKS
    // ========================
    // extract the root (start of array)
    // -- pop last element of array and replace index of 0
    // trickle down...checking children
    // if either child is larger than value, swap with the largest child
    // -- if no children...return old root
    extractMax() {
        const max = this.values[0]
        const last = this.values.pop()
        this.values[0] = last

        this.trickleDown()
        return max
    }

    trickleDown() {
        var index = 0
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            const leftChildValue = this.values[leftChildIndex] || 0
            const rightChildValue = this.values[rightChildIndex] || 0
            const currentValue = this.values[index]

            if (leftChildValue > currentValue || rightChildValue > currentValue) {
                if (leftChildValue > rightChildValue) {
                    index = this.swap(index, leftChildIndex)
                } else {
                    index = this.swap(index, rightChildIndex)
                }
            } else {
                return
            }
        }
    }
}

module.exports = MaxBinaryHeap