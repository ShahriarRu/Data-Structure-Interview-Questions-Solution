/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

var makeGraph = (manager) => {
  let adjList = {};
  for (i = 0; i < manager.length; i++) {
    if (manager[i] == -1) {
      continue;
    }
    if (!adjList[manager[i]]) {
      adjList[manager[i]] = [];
      adjList[manager[i]].push(i);
    } else {
      adjList[manager[i]].push(i);
    }
  }
  return adjList;
};

const calculateTime = function (currentId, adjList, informTime) {
  if (!adjList[currentId]) {
    return 0;
  }

  let max = 0;
  const subordinates = adjList[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, calculateTime(subordinates[i], adjList, informTime));
  }

  return max + informTime[currentId];
};

var numOfMinutes = function (n, headID, manager, informTime) {
  let adjList = makeGraph(manager);
  return calculateTime(headID, adjList, informTime);
};
