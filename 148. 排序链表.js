// 归并排序 自底向上
function mergeSort(head) {
    let length = 0;
    let ptr = head;
    while (ptr) {
        length++;
        ptr = ptr.next;
    }

    const dummyHead = new ListNode();
    dummyHead.next = head;
    
    for (let i = 1; i < length; i *= 2) {
    let dummyPtr = dummyHead;
    let current = dummyHead.next;

        while (current) {
            const left = current;
            for (let j = 1; j < i && current && current.next; j++) current = current.next;
            const right = current.next;
            current.next = null;
            current = right;
            for (let j = 1; j < i && current && current.next; j++) current = current.next;
            if (current !== null) { // 按理来讲，current肯定不是null
                let nextNode = current.next;
                current.next = null;
                current = nextNode;
            }

            const merged = merge(left, right);
            dummyPtr.next = merged;
            while (dummyPtr.next) dummyPtr = dummyPtr.next;
        }
    }

    return dummyHead.next;
}

function merge(left, right) {
    const dummyHead = new ListNode();
    let ptr = dummyHead;

    while (left && right) {
        if (left.val <= right.val) {
            ptr.next = left;
            left = left.next;
        } else {
            ptr.next = right;
            right = right.next;
        }
        ptr = ptr.next;
        ptr.next = null;
    }

    if (left) {
        ptr.next = left;
    } else if (right) {
        ptr.next = right;
    }

    return dummyHead.next;
}

var sortList = function(head) {
    return mergeSort(head, null)
};

/* 归并排序 自顶向下
function merge(left, right) {
    const startNode = new ListNode();
    startNode.next = null;

    let ptr = startNode;

    while (left && right) {
        if (left.val <= right.val) {
            ptr.next = left;
            left = left.next;
        } else {
            ptr.next = right;
            right = right.next;
        }
        ptr = ptr.next;
        ptr.next = null;
    }
    if (left) {
        ptr.next = left;
    } else if (right) {
        ptr.next = right;
    }

    return startNode.next;
}

function mergeSort(head, tail) {
    if (head === null) {
        return head;
    }
    if (head.next === tail) { // 最下面的一层，链表只有一个结点
        head.next = null;
        return head;
    }

    let slow = head;
    let fast = head;
    while (fast != tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast != tail) fast = fast.next;
    }

    const mid = slow;
    const left = mergeSort(head, mid);
    const right = mergeSort(mid, tail);
    return merge(left, right);
}

var sortList = function(head) {
    return mergeSort(head, null)
};
*/

/* 链表转成数组，sort，然后再转链表
var sortList = function(head) {
    const li = [];
    while (head) {
        li.push(head);
        head = head.next;
    }
    li.sort((a, b)=>a.val-b.val);
    const newList = new ListNode();
    newList.next = null;
    let ptr = newList;
    li.forEach((item)=>{
        item.next = null;
        ptr.next = item;
        ptr = ptr.next;
    });
    return newList.next;
};
*/