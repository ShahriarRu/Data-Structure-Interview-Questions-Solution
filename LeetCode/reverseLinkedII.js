/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;

  let newNode = new ListNode(-1);
  newNode.next = head;
  let temp = newNode;

  for (let i = 0; i < left - 1; i++) {
    temp = temp.next;
  }

  let tail = temp.next;

  for (let i = 0; i < right - left; i++) {
    let temp2 = temp.next;
    temp.next = tail.next;
    tail.next = tail.next.next;
    temp.next.next = temp2;
  }
  return newNode.next;
};
