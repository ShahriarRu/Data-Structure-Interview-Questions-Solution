/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr = head;
  let l = 1;
  while (curr.next) {
    l++;
    curr = curr.next;
  }
  if (l - n == 0) {
    head = head.next;
    return head;
  }

  var temp = head;
  for (let i = 0; i < l - n; i++) {
    var prev = temp;
    if (temp.next) {
      temp = temp.next;
    }
  }
  prev.next = temp.next;
  return head;
};
