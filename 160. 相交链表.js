/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let lenA = 0;
    let lenB = 0;
    let ptrA = headA;
    let ptrB = headB;

    while (ptrA) {
        ptrA = ptrA.next;
        lenA++;
    }
    while (ptrB) {
        ptrB = ptrB.next;
        lenB++;
    }

    ptrA = headA;
    ptrB = headB;

    while (lenA > lenB) {
        ptrA = ptrA.next;
        lenA--;
    }
    while (lenB > lenA) {
        ptrB = ptrB.next;
        lenB--;
    }

    while (ptrA) {
        if (ptrA === ptrB) return ptrA;
        ptrA = ptrA.next;
        ptrB = ptrB.next;
    }

    return null;
};