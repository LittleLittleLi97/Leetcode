/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    const childrenList = new Array(numCourses).fill(0).map(()=>new Array());

    for (let i = 0; i < prerequisites.length; i++) {
        const [child, parent] = prerequisites[i];
        indegree[child]++;
        childrenList[parent].push(child);
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    const out = [];
    while (queue.length > 0) {
        const now = queue[0];
        queue.shift();
        out.push(now);

        for (let i = 0; i < childrenList[now].length; i++) {
            const child = childrenList[now][i];
            indegree[child]--;
            if (indegree[child] === 0) queue.push(child);
        }
    }

    if (out.length !== numCourses) return [];
    else return out;
};