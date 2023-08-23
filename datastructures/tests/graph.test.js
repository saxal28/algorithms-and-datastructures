const Graph = require("../graph");

test("Can add a vertex to a graph", () => {
    const graph = new Graph()
    graph.addVertex("Tokyo")
    expect(graph.adjacencyList).toStrictEqual({
        "Tokyo": []
    });
})

test("Can add an edge to a graph", () => {
    const graph = new Graph()
    graph.addVertex("Tokyo")
    graph.addVertex("Dallas")
    graph.addVertex("Aspen")

    graph.addEdge("Tokyo", "Dallas")
    graph.addEdge("Tokyo", "Aspen")

    expect(graph.adjacencyList).toStrictEqual({
        "Tokyo": ["Dallas", "Aspen"],
        "Dallas": ["Tokyo"],
        "Aspen": ["Tokyo"]
    });
})

test("Can remove an edge to a graph", () => {
    const graph = new Graph()
    graph.addVertex("Tokyo")
    graph.addVertex("Dallas")
    graph.addVertex("Aspen")

    graph.addEdge("Tokyo", "Dallas")
    graph.addEdge("Tokyo", "Aspen")

    expect(graph.adjacencyList).toStrictEqual({
        "Tokyo": ["Dallas", "Aspen"],
        "Dallas": ["Tokyo"],
        "Aspen": ["Tokyo"]
    });

    graph.removeEdge("Dallas", "Tokyo")

    expect(graph.adjacencyList).toStrictEqual({
        "Tokyo": ["Aspen"],
        "Dallas": [],
        "Aspen": ["Tokyo"]
    });
})

test("Can remove a vertex to a graph", () => {
    const graph = new Graph()
    graph.addVertex("Tokyo")
    graph.addVertex("Dallas")
    graph.addVertex("Aspen")

    graph.addEdge("Tokyo", "Dallas")
    graph.addEdge("Tokyo", "Aspen")

    expect(graph.adjacencyList).toStrictEqual({
        "Tokyo": ["Dallas", "Aspen"],
        "Dallas": ["Tokyo"],
        "Aspen": ["Tokyo"]
    });

    graph.removeVertex("Tokyo")
    expect(graph.adjacencyList).toStrictEqual({
        "Dallas": [],
        "Aspen": []
    });

})

test("Can vist all nodes with DFS recursive search", () => {
    const graph = new Graph()
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")
    graph.addVertex("F")

    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("B", "D")
    graph.addEdge("C", "E")
    graph.addEdge("D", "E")
    graph.addEdge("D", "F")
    graph.addEdge("E", "F")

    const result = graph.depthFirstSearchRecursive("A")
    const hasSearchedAllNodes = result.length == Object.keys(graph.adjacencyList).length
    expect(hasSearchedAllNodes).toStrictEqual(true)
})

test("Can vist all nodes with DFS iterative search", () => {
    const graph = new Graph()
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")
    graph.addVertex("F")

    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("B", "D")
    graph.addEdge("C", "E")
    graph.addEdge("D", "E")
    graph.addEdge("D", "F")
    graph.addEdge("E", "F")

    const result = graph.depthFirstSearchIterative("A")
    const hasSearchedAllNodes = result.length == Object.keys(graph.adjacencyList).length
    expect(hasSearchedAllNodes).toStrictEqual(true)
})

test("Can vist all nodes with BFS search", () => {
    const graph = new Graph()
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")
    graph.addVertex("F")

    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("B", "D")
    graph.addEdge("C", "E")
    graph.addEdge("D", "E")
    graph.addEdge("D", "F")
    graph.addEdge("E", "F")

    const result = graph.breadthFirstSearchIterative("A")
    const hasSearchedAllNodes = result.length == Object.keys(graph.adjacencyList).length
    expect(hasSearchedAllNodes).toStrictEqual(true)
})