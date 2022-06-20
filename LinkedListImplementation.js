class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

let linkedList = new MyLinkedList(10);
linkedList.append(6);
linkedList.append(15);
linkedList.append(20);
linkedList.append(9);
linkedList.prepend(12);
linkedList.prepend(18);
console.log(linkedList);
