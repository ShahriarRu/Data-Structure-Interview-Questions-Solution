class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
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

  lookup(value) {}
}

const tree = new BinarySearchTree();
//tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

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
