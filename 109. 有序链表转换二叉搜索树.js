/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    function createBST(st, end) {
        const dummy = new ListNode(0, st);
        let slow = dummy;
        let fast = dummy;
        while (fast.next !== end) {
            slow = slow.next;
            fast = fast.next;
            if (fast.next !== end) fast = fast.next;
        }

        const root = new TreeNode(slow.val);
        if (st !== slow) root.left = createBST(st, slow);
        if (slow.next !== end) root.right = createBST(slow.next, end);

        return root;
    }

    return createBST(head, null);
};













