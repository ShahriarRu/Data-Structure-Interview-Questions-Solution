// var searchRange = function (nums, target) {
//   arr = [];
//   ind = nums.indexOf(target);
//   if (ind == -1) {
//     return [-1, -1];
//   }
//   arr.push(ind);
//   while (nums[ind] == target) {
//     ind++;
//   }
//   arr.push(ind - 1);

//   return arr;
// };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function binSearch(arr, item) {
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] < item) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
var searchRange = function (nums, target) {
  ind = binSearch(nums, target);
  if (ind == -1) {
    return [-1, -1];
  }
  left = ind;
  right = ind;
  while (nums[left] == target || nums[right] == target) {
    if (nums[left] == target) {
      left--;
    }
    if (nums[right] == target) {
      right++;
    }
  }
  return [left + 1, right - 1];
};
