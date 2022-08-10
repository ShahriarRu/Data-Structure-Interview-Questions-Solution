/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
  let maxAr = 0;
  len = heights.length;
  let i = 0,
    j = len - 1;
  while (i < j) {
    area = Math.min(heights[i], heights[j]) * (j - i);
    maxAr = Math.max(maxAr, area);
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxAr;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 9, 7]));
