const removeDuplicates = (nums) => {
  let track = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      nums[track] = nums[i];
      track++;
    }
  }
  nums[track] = nums[nums.length - 1];
  return track + 1;
};
