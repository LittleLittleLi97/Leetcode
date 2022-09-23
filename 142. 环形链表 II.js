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
// var detectCycle = function(head) {
//     const s = new Set();
//     while (head) {
//         if (s.has(head)) return head;
//         s.add(head);
//         head = head.next;
//     }
//     return null;
// };
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        } else {
            return null;
        }

        if (slow == fast) {
            fast = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};