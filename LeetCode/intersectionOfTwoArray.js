/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const traverse = function (nums1, nums2) {
    var arr = [];
    for (i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        arr.push(nums1[i]);
        let index = nums2.indexOf(nums1[i]);
        nums2[index] = -1;
      }
    }

    return arr;
  };

  if (nums2.length > nums1.length) {
    return traverse(nums1, nums2);
  } else {
    return traverse(nums2, nums1);
  }
};
