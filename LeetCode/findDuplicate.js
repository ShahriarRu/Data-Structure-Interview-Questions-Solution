/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  list = {};
  for (i = 0; i < nums.length; i++) {
    if (list[nums[i]] == null) {
      list[nums[i]] = i;
    } else {
      return nums[i];
    }
  }
};
