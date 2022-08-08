class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.top == this.bottom) {
      this.bottom = null;
    }
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;

    return temp;
  }
}

let myStack = new Stack();

myStack.push(5);
myStack.push(15);
myStack.push(10);
myStack.push(20);
myStack.pop();

console.log(myStack.pop());
