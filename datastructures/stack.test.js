const Stack = require("./stack")

test("Can Add an Item to the start of a Stack", () => {
    const stack = new Stack()
    stack.push("FIRST")
    expect(stack.get(0).value).toStrictEqual("FIRST");
    stack.push("SECOND")
    expect(stack.get(1).value).toStrictEqual("FIRST"); // end
})

test("Can remove the first item from the Stack", () => {
    const stack = new Stack()
    stack.push("FIRST")
    stack.push("SECOND")
    stack.push("THIRD")

    expect(stack.pop()).toStrictEqual("THIRD");
    expect(stack.pop()).toStrictEqual("SECOND");
    expect(stack.pop()).toStrictEqual("FIRST");
    expect(stack.pop()).toStrictEqual(null);
})
