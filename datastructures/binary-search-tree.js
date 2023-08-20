// =====================
// HOW IT WORKS
// =====================
// when inserting, it checks
// -- if node does not exist, creates node
// -- if node exists and is less than:
// ---- if no value, creates new node
// ---- if value, check if greater or less than and repeat
// -- if node exists and is greater than:
// ---- if no value, creates new node
// ---- if value, check if greater or less than and repeat

const Queue = require("./queue")

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (this.root == null) {
            this.root = new Node(value)
            return this
        } else {
            var currentNode = this.root
            while (currentNode != null) {
                if (value == currentNode.value) return undefined // do not allow for duplicates
                const isLessThanAndHasAnotherNode = value < currentNode.value && currentNode.left
                const isLessThanAndDoesNotHaveAnotherNode = value < currentNode.value && !currentNode.left
                const isGreaterThanAndHasAnotherNode = value > currentNode.value && currentNode.right

                if (isLessThanAndHasAnotherNode) {
                    currentNode = currentNode.left
                } else if (isLessThanAndDoesNotHaveAnotherNode) {
                    currentNode.left = newNode
                    currentNode = null
                } else if (isGreaterThanAndHasAnotherNode) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = newNode
                    currentNode = null
                }
            }

            return this
        }
    }

    find(value) {
        if (this.root == null) return false

        var currentNode = this.root
        while (currentNode != null) {
            const isEqual = value == currentNode.value
            const isLessThanAndHasAnotherNode = value < currentNode.value && currentNode.left
            const isLessThanAndDoesNotHaveAnotherNode = value < currentNode.value && !currentNode.left
            const isGreaterThanAndHasAnotherNode = value > currentNode.value && currentNode.right

            if (isEqual) {
                return true
            } else if (isLessThanAndHasAnotherNode) {
                currentNode = currentNode.left
            } else if (isLessThanAndDoesNotHaveAnotherNode) {
                currentNode = null
            } else if (isGreaterThanAndHasAnotherNode) {
                currentNode = currentNode.right
            } else {
                currentNode = null
            }
        }

        return false
    }

    // ==========================
    // BFS - HOW IT WORKS
    // ==========================
    //        example tree
    //             10
    //          6     15
    //        3   8     20
    // ===========================
    // we start from the top, and go left -> right
    // queue = [10]
    // loop over queue, move values to visited, and add left / right values to queue
    // -- while 10 is in the queue, check if there is a left & right
    // -- queue = [6, 15]  | visited = [10]
    // -- queue = [3,8,20] | visited = [10,6,15]
    // -- queue = [] | visited = [10,6,15,3,8,20]
    // when queue is empty....done
    // if find value, done
    breadthFirstSearch(value) {
        const queue = new Queue() // this could also be a array -> use shift + unshift
        const visited = []
        queue.enqueue(this.root)

        while (queue.size != 0) {
            const { left, right, value } = queue.dequeue()
            visited.push(value)

            if (left) queue.enqueue(left)
            if (right) queue.enqueue(right)
        }

        return visited
    }
}

module.exports = BinarySearchTree