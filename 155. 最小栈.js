// 检索最小元素O(1)，入栈O(1)，出栈O(1)
var MinStack = function() {
    this.stack = [];
    this.secStack = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.secStack.push(Math.min(this.secStack[this.secStack.length-1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.secStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.secStack[this.secStack.length - 1];
};


/* 双向链表，tail为最小元素，添加时将元素插入到链表中
// 检索最小元素O(1)，入栈O(n)，出栈O(1)
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkList {
    constructor() {
        this.head = new ListNode(null);
        this.tail = new ListNode(null);
        this.head.next = this.tail;
        this.head.prev = this.tail;
        this.tail.next = this.head;
        this.tail.prev = this.head;
    }
    push(val) {
        const newNode = new ListNode(val);
        let ptr = this.head;
        while (ptr.next !== this.tail && val < ptr.next.val) {
            ptr = ptr.next;
        }

        ptr.next.prev = newNode;
        newNode.next = ptr.next;
        newNode.prev = ptr;
        ptr.next = newNode;

        return newNode;
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}

var MinStack = function() {
    this.stackMap = [];
    this.list = new LinkList();
};

MinStack.prototype.push = function(val) {
    const node = this.list.push(val);
    this.stackMap.push(node);
};

MinStack.prototype.pop = function() {
    const node = this.stackMap[this.stackMap.length - 1];
    this.stackMap.pop();
    if (node) {
        this.list.remove(node);
    }
};

MinStack.prototype.top = function() {
    return this.stackMap[this.stackMap.length - 1].val;
};

MinStack.prototype.getMin = function() {
    return this.list.tail.prev.val;
};
*/