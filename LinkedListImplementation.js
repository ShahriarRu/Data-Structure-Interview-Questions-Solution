class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    let newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    } else if (index == 0) {
      return this.prepend(value);
    }

    let newNode = new Node(value);
    let pointer = this.head;

    for (let i = 1; i < index; i++) {
      pointer = pointer.next;
    }
    newNode.next = pointer.next;
    pointer.next = newNode;

    this.length++;
  }

  remove(index) {
    if (index > this.length) {
      return;
    } else if (index == 0) {
      this.head = this.head.next;
    }

    let pointer = this.head;

    for (let i = 1; i < index; i++) {
      pointer = pointer.next;
    }
    //prev = pointer
    //next = pointer.next
    pointer.next = pointer.next.next;
    this.length--;
  }

  print() {
    let pointer = this.head;
    let arr = [];
    while (pointer != null) {
      arr.push(pointer.value);
      pointer = pointer.next;
    }

    return arr;
  }

  search(value) {
    let pointer = this.head;
    let index = 0;
    let arr = [];

    while (pointer != null) {
      //console.log(pointer.value, value)
      if (pointer.value == value) {
        arr.push(index);
      }
      index++;
      pointer = pointer.next;
    }

    if (arr.length == 0) {
      console.log("Sorry, value not found 😪");
    } else {
      return arr;
    }
  }
}

let linkedList = new MyLinkedList(10);

linkedList.append(6);
linkedList.append(15);
linkedList.append(20);
linkedList.append(9);
linkedList.append(16);
linkedList.append(25);
linkedList.prepend(12);
linkedList.prepend(18);
linkedList.prepend(22);
linkedList.insert(0, 16);
linkedList.remove(0);
//console.log(linkedList.search(16))
console.log(linkedList);
