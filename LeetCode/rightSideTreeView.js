/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  const results = [];

  while (queue.length) {
    let currentValues = [];
    length = queue.length;
    while (length > 0) {
      currentNode = queue.shift();
      if (length == 1) {
        results.push(currentNode.val);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      length--;
    }
  }
  return results;
};
