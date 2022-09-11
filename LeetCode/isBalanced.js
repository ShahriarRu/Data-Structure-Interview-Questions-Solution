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
 * @return {boolean}
 */

var Depth = function (node, depth) {
  if (!node) {
    return 0;
  }
  depth++;
  return Math.max(Depth(node.right, depth), Depth(node.left, depth)) + 1;
};

var isBalanced = function (root) {
  if (!root) {
    return true;
  } else {
    left = Depth(root.left, 0);
    right = Depth(root.right, 0);
  }
  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
