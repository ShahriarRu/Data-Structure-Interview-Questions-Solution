var countSmaller = function (nums) {
  let bst = new BST(nums[nums.length - 1]);
  let outputArr = new Array(nums.length).fill(0);
  for (let j = nums.length - 2; j >= 0; j--) {
    outputArr[j] = bst.insert(nums[j]);
  }
  return outputArr;
};

class BST {
  constructor(v, s = 0) {
    this.value = v;
    this.left = null;
    this.right = null;
    this.size = s;
  }

  insert(v, s = 0) {
    if (v > this.value) {
      if (this.right == null) {
        this.right = new BST(v);
        return this.size + s + 1;
      } else {
        return this.right.insert(v, s + this.size + 1);
      }
    } else {
      this.size++;
      if (this.left == null) {
        this.left = new BST(v);
        return s;
      } else {
        return this.left.insert(v, s);
      }
    }
  }
}

var countSmaller = function (nums) {
  len = nums.length;
  final = [];
  for (let i = 0; i < len; i++) {
    let newarr = nums.slice(i + 1, len + 1);
    count = newarr.filter((item) => item < nums[i]);

    final.push(count.length);
  }
  return final;
};
