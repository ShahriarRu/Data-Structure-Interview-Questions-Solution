/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  hay_len = haystack.length;
  need_len = needle.length;
  if (need_len == 0) {
    return 0;
  }

  for (i = 0; i <= hay_len - need_len; i++) {
    str = haystack.slice(i, i + need_len);
    if (str == needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr((haystack = "aaaaa"), (needle = "bba")));
