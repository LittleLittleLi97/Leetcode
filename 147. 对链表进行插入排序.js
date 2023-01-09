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
var insertionSortList = function(head) {
    const dummy = new ListNode(undefined, head);
    let prev = head;

    while (prev && prev.next) {
        if (prev.next.val >= prev.val) {
            prev = prev.next;
            continue;
        }
        const now = prev.next;
        const next = now.next;
        prev.next = next;

        let rankPrev = dummy;
        while (rankPrev !== prev && now.val >= rankPrev.next.val) 
            rankPrev = rankPrev.next;

        now.next = rankPrev.next;
        rankPrev.next = now;
    }
    return dummy.next;
};