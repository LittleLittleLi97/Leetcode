"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

# 这个题实际上和116是一个写法，但是在leetcode中使用javascript会报错
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        queue = []
        if root:
            queue.append(root)

        while len(queue):
            length = len(queue)
            lastNode = None

            for i in range(length):
                now = queue[0]
                queue = queue[1:]
                if now.left:
                    queue.append(now.left)
                if now.right:
                    queue.append(now.right)
                if lastNode is not None:
                    lastNode.next = now
                lastNode = now

        return root
                
