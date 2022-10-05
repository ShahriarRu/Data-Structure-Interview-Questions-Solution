/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

let generateGraph = (prerequisites) => {
  let graph = {};
  for (let [x, y] of prerequisites) {
    if (!graph[x]) {
      graph[x] = [];
      graph[x].push(y);
    } else {
      graph[x].push(y);
    }
  }
  return graph;
};

let BFS = (numCourses, prerequisite) => {
  let seen = [];
  let queue = [];
  queue.push();
};
var canFinish = function (numCourses, prerequisites) {
  let graph = generateGraph(prerequisites);
};
