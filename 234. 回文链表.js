/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    const reverseHead = new ListNode(0, null);
    let originPtr = head;

    while (originPtr) {
        const copyNode = new ListNode(originPtr.val, reverseHead.next);
        reverseHead.next = copyNode;

        originPtr = originPtr.next;
    }

    originPtr = head;
    let reversePtr = reverseHead.next;
    while (originPtr) {
        if (originPtr.val === reversePtr.val) {
            originPtr = originPtr.next;
            reversePtr = reversePtr.next;
        } else {
            return false;
        }
    }

    return true;
};