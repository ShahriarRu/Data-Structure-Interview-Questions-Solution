/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  arr = [[1], [1, 1]];
  for (i = 2; i < rowIndex + 1; i++) {
    let newarr = [];
    for (j = 0; j < i - 1; j++) {
      newarr[0] = 1;
      newarr.push(arr[i - 1][j] + arr[i - 1][j + 1]);
    }
    newarr[i] = 1;
    arr.push(newarr);
  }
  return arr[rowIndex];
};
