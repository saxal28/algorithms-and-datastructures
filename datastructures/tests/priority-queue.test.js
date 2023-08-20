const PriorityQueue = require("../priority-queue");

test("Can prioritize a Priority Queue", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.enqueue("go out", 3)
    priorityQueue.enqueue("walk dog", 2)
    priorityQueue.enqueue("pay bill", 1)

    expect(priorityQueue.stringValues[0]).toStrictEqual("pay bill");
});

test("Can get the most important element from a Priority Queue and set the next item", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.enqueue("go out", 3)
    priorityQueue.enqueue("eat pizza", 5)
    priorityQueue.enqueue("go out", 4)
    priorityQueue.enqueue("rip cigs", 8)
    priorityQueue.enqueue("pay bill", 1)
    priorityQueue.enqueue("walk dog", 2)

    expect(priorityQueue.stringValues[0]).toStrictEqual("pay bill");

    const firstUp = priorityQueue.dequeue()

    expect(firstUp.value).toStrictEqual("pay bill");

    expect(priorityQueue.stringValues[0]).toStrictEqual("walk dog");
});