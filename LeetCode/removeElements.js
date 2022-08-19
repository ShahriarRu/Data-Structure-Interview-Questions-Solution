/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    var temp = head
    while(head && temp){
        if(head.val == val){
            head = head.next
            temp = head;
            continue
        }
        
        var prev = temp
        temp = temp.next
        if (temp && temp.val == val){
            prev.next = temp.next
            temp = prev
        }
    }
    return head
};