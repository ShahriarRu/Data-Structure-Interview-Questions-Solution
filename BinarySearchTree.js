class Node {
	constructor(value){
		this.left = null
		this.right = null
		this.value = value
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null
	}
	insert(value){
		let newNode = new Node(value);
		if(!this.root){
			this.root = newNode;
		}
		let temp = this.root;
		while(!temp){
			if(value >= temp.value){
				temp = temp.right
			}
			else if(value < temp.value){
				temp = temp.left
			}
		}
		temp = newNode;
	}
	
	lookup(value){
		
	}
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(12)
tree.insert(5)
tree.insert(10)
tree.insert(13)
console.log(tree)
