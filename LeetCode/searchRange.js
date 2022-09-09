var searchRange = function (nums, target) {
  arr = [];
  ind = nums.indexOf(target);
  if (ind == -1) {
    return [-1, -1];
  }
  arr.push(ind);
  while (nums[ind] == target) {
    ind++;
  }
  arr.push(ind - 1);

  return arr;
};
