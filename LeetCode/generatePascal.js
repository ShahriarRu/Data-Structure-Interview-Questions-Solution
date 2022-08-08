/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  arr = [[1], [1, 1]];

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
