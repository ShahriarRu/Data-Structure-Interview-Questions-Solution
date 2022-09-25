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

// const dfs = (adjacencyList, startNode) => {
//     const visited = [];
//     const stack = [startNode];

//     while (stack.length) {
//         const currentNode = stack.pop();
//         if (!visited.includes(currentNode)) {
//         visited.push(currentNode);
//         stack.push(...adjacencyList[currentNode]);
//         }
//     }

//     return visited;
// };

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

const dfs = (adjacencyMatrix, startNode) => {
  const visited = [];
  const stack = [startNode];

  while (stack.length) {
    const currentNode = stack.pop();
    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      for (let i = 0; i < adjacencyMatrix[currentNode].length; i++) {
        if (adjacencyMatrix[currentNode][i] === 1) {
          stack.push(i);
        }
      }
    }
  }

  return visited;
};

console.log(dfs(adjacencyMatrix, 0));
