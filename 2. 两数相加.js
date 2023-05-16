/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode();
    let ptr = dummyHead;
    let increment = 0;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        let value = val1 + val2 + increment;
        increment = Math.floor(value / 10);
        value = value % 10;

        ptr.next = new ListNode(value);
        ptr = ptr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (increment) {
        ptr.next = new ListNode(increment);
    }
    return dummyHead.next;
};