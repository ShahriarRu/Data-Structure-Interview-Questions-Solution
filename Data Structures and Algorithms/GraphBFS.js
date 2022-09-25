// const adjacencyList = [
//   [1, 3],
//   [0],
//   [3, 8],
//   [0, 2, 4, 5],
//   [3, 6],
//   [3],
//   [4, 7],
//   [6],
//   [2],
// ];

// const bfs = (adjacencyList, startNode) => {
//   const visited = [];
//   const queue = [startNode];

//   while (queue.length) {
//     const currentNode = queue.shift();
//     if (!visited.includes(currentNode)) {
//       visited.push(currentNode);
//       queue.push(...adjacencyList[currentNode]);
//     }
//   }

//   return visited;
// };

// console.log(bfs(adjacencyList, 0));

const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];

const bfs = (adjacencyMatrix, startNode) => {
  const visited = [];
  const queue = [startNode];

  while (queue.length) {
    const currentNode = queue.shift();
    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      for (let i = 0; i < adjacencyMatrix[currentNode].length; i++) {
        if (adjacencyMatrix[currentNode][i] === 1) {
          queue.push(i);
        }
      }
    }
  }

  return visited;
};

console.log(bfs(adjacencyMatrix, 0));
