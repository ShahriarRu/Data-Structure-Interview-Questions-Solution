/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  row = matrix.length;
  col = matrix[0].length;
  queue = [];

  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (matrix[i][j] == 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    current = queue.shift();
    console.log("-----" + current + "-------");
    rowIndex = current[0];
    colIndex = current[1];
    for (i = 0; i < col; i++) {
      matrix[rowIndex][i] = 0;
      console.log(i, col);
    }

    for (i = 0; i < row; i++) {
      matrix[i][colIndex] = 0;
    }
  }

  return matrix;
};
