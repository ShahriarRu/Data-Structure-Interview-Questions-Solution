var moveZeroes = function (nums) {
  if (nums.length < 2) return;

  let i = 0,
    j = 1;

  while (j < nums.length) {
    if (nums[i] == 0 && nums[j] != 0) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
      continue;
    } else if (nums[i] == 0 && nums[j] == 0) {
      j++;
      continue;
    }

    i++;
    j++;
  }
};
