/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }
  const seenNodes = new Set();
  let currentNode = head;

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return null;
    }

    seenNodes.add(currentNode);

    currentNode = currentNode.next;
  }

  return currentNode;
};
