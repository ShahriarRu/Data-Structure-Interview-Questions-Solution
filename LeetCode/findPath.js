/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const search = (graphs, source, destination) => {
  var que = [source];
  var visited = new Set();

  while (que.length > 0) {
    const current = que.shift();
    visited.add(current);

    if (current === destination) {
      return true;
    }
    for (var node of graphs[current]) {
      if (!visited.has(node)) {
        que.push(node);
      }
    }
  }
  return false;
};

var validPath = function (n, edges, source, destination) {
  let adjlist = {};
  for (let [x, y] of edges) {
    if (!adjlist[x]) {
      adjlist[x] = [];
      adjlist[x].push(y);
    } else {
      adjlist[x].push(y);
    }
    if (!adjlist[y]) {
      adjlist[y] = [];
      adjlist[y].push(x);
    } else {
      adjlist[y].push(x);
    }
  }

  return search(adjlist, source, destination);
};
