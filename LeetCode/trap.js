/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
};

// leetcode 815 solution
var numBusesToDestination = function (routes, S, T) {
  let busRoutes = new Set();
  let visited = new Set();
  let queue = [S];
  let level = 0;
  let count = 0;

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr === T) {
        return level;
      }

      for (let route of routes) {
        if (route.includes(curr)) {
          for (let stop of route) {
            if (!visited.has(stop)) {
              visited.add(stop);
              queue.push(stop);
            }
          }
        }
      }
    }
    level++;
  }

  return -1;
};
// leetcode 118 optimized solution  O(n)
var generate = function (numRows) {
  let arr = [[1], [1, 1]];

  if (numRows == 1) {
    return [[1]];
  } else if (numRows == 2) {
    return arr;
  }

  for (i = 2; i < numRows; i++) {
    let newarr = [];
    for (j = 0; j < i - 1; j++) {
      newarr[0] = 1;
      newarr.push(arr[i - 1][j] + arr[i - 1][j + 1]);
    }
    newarr[i] = 1;
    arr.push(newarr);
  }
  return arr;
};
