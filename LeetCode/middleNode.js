/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let curr = head;
  let l = 1;
  while (curr.next) {
    l++;
    curr = curr.next;
  }
  var middle = Math.floor(l / 2);
  var temp = head;
  for (let i = 0; i < middle; i++) {
    var prev = temp;
    if (temp.next) {
      temp = temp.next;
    }
  }
  return temp;
};
