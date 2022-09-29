/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const inDeg = new Array(numCourses).fill(0);
    const mLaterCourses = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        const [later, pre] = prerequisites[i];
        inDeg[later]++;

        let laterCourses = mLaterCourses.get(pre);
        if (!laterCourses) {
            laterCourses = [];
        }
        laterCourses.push(later);
        mLaterCourses.set(pre, laterCourses);
    }

    const queue = [];
    for (let i = 0; i < inDeg.length; i++) {
        if (inDeg[i] === 0) queue.push(i);
    }

    let finishCourses = 0;

    while (queue.length > 0) {
        const nowCourse = queue[0];
        queue.shift();
        finishCourses++;

        const laterCourses = mLaterCourses.get(nowCourse);
        if (laterCourses) {
            for (let i = 0; i < laterCourses.length; i++) {
                const laterCourse = laterCourses[i];
                inDeg[laterCourse]--;
                if (inDeg[laterCourse] === 0) queue.push(laterCourse);
            }
        }
    }
    
    if (finishCourses !== numCourses) return false;
    else return true;
};