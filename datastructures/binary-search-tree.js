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
            while(currentNode != null) {
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
        while(currentNode != null) {
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
}

module.exports = BinarySearchTree