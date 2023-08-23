const Queue = require("./queue")
const Stack = require("./stack")

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(key) {
        this.adjacencyList[key] = []
    }

    addEdge(vertexOne, vertexTwo) {
        this.adjacencyList[vertexOne].push(vertexTwo)
        this.adjacencyList[vertexTwo].push(vertexOne)
    }

    removeEdge(vertexOne, vertexTwo) {
        // remove vertex one from vertex two
        // remove vertex two from vertex one
        this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(x => x != vertexTwo)
        this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(x => x != vertexOne)
    }

    removeVertex(vertex) {
        Object.keys(this.adjacencyList).forEach(key => this.removeEdge(vertex, key))
        delete this.adjacencyList[vertex]
    }

    depthFirstSearchRecursive(vertex) {
        const result = []
        const visited = {}
        const list = this.adjacencyList

        function helper(vertex) {
            if (!vertex) return
            visited[vertex] = true
            result.push(vertex)
            list[vertex].forEach(edge => {
                if (!visited[edge]) helper(edge)
            })
        }

        helper(vertex)

        return result
    }

    depthFirstSearchIterative(vertex) {
        const result = []
        const visited = {}

        const stack = new Stack()
        stack.push(vertex)

        while (stack.size != 0) {
            const vertex = stack.pop()

            if (!visited[vertex]) {
                visited[vertex] = true
                result.push(vertex)

                this.adjacencyList[vertex].forEach(connectingVertex => {
                    if (!visited[connectingVertex]) {
                        stack.push(connectingVertex)
                    }
                })
            }
        }

        return result
    }

    breadthFirstSearchIterative(vertex) {
        const result = []
        const visited = {}

        const queue = new Queue()
        queue.enqueue(vertex)

        while (queue.size != 0) {
            const vertex = queue.dequeue()

            if (!visited[vertex]) {
                visited[vertex] = true
                result.push(vertex)

                // visit each child
                this.adjacencyList[vertex].forEach(adjacentVertex => {
                    if (!visited[adjacentVertex]) {
                        queue.enqueue(adjacentVertex)
                    }
                })
            }
        }

        return result
    }
}

module.exports = Graph