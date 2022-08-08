/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    //console.log(comp[nums[i] ])

    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }

    comp[target - nums[i]] = i;
  }
};
