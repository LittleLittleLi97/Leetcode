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

 var removeNthFromEnd = function(head, n) {
    var st = new ListNode(0, head);
    var left = st;
    var right = head;
    for (var i = 0; i < n; i++) right = right.next;
    while (right) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return st.next;
};