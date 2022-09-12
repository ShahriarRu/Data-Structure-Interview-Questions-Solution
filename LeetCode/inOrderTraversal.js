/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }

  list.push(node.val);

  if (node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  return traverseInOrder(root, []);
};
