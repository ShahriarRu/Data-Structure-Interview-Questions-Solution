var topKFrequent = function (nums, k) {
  list = {};
  for (i = 0; i < nums.length; i++) {
    if (list[nums[i]]) {
      list[nums[i]]++;
    } else {
      list[nums[i]] = 1;
    }
  }

  return Object.keys(list)
    .sort((a, b) => list[b] - list[a])
    .map(Number)
    .slice(0, k);
};

console.log(topKFrequent((nums = [5, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4]), (k = 2)));
