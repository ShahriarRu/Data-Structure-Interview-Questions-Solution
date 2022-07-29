class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let temp = this.root;
      while (temp) {
        if (value >= temp.value) {
          if (!temp.right) {
            temp.right = newNode;
            break;
          } else {
            temp = temp.right;
          }
        } else if (value < temp.value) {
          if (!temp.left) {
            temp.left = newNode;
            break;
          } else {
            temp = temp.left;
          }
        }
      }
      return newNode;
    }
  }

  lookup(value) {
    if (!this.root) {
      return "Tree is empty";
    }
    let temp = this.root;
    let level = 1;
    while (temp) {
      console.log(temp.value);
      if (temp.value == value) {
        return `found ${value} at level ${level}`;
      } else if (temp.value < value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
      level++;
    }
    return "Item not found";
  }
  BFS() {
    let currentNode = this.root;
    let list = [];
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(170));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170
