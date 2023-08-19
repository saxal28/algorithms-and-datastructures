const Queue = require("./queue")

test("Can add to a Queue", () => {
    const queue = new Queue()
    queue.enqueue(1) // first in
    queue.enqueue(2)
    queue.enqueue(3)

    console.log(queue)

    expect(queue.values).toStrictEqual([1, 2, 3]);
})

test("Can remove the first element of a Queue", () => {
    const queue = new Queue()
    queue.enqueue(1) // first out
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.dequeue()).toStrictEqual(1);
    expect(queue.dequeue()).toStrictEqual(2);
    expect(queue.dequeue()).toStrictEqual(3);
})