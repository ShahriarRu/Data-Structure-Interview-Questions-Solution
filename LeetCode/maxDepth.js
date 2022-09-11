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
 * @return {number}
 */

var Depth = function (node, currentDepth) {
  if (!node) {
    return currentDepth;
  }
  currentDepth++;

  return Math.max(
    Depth(node.right, currentDepth),
    Depth(node.left, currentDepth)
  );
};

var maxDepth = function (root) {
  return Depth(root, 0);
};
