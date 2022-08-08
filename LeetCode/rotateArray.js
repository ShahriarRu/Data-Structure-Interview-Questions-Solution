var rotate = function (nums, k) {
  newnums = nums.slice();
  for (index = newnums.length - 1; index >= 0; index--) {
    nums[(index + k) % newnums.length] = newnums[index];
  }
  //console.log(nums)
};

rotate((nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3));
