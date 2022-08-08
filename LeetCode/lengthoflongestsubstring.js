var lengthOfLongestSubstring = function (s) {
  var k = 0;
  var maxLength = 0;
  for (i = 0; i < s.length; i++) {
    for (j = k; j < i; j++) {
      if (s[i] === s[j]) {
        k = j + 1;
        break;
      }
    }
    if (i - k + 1 > maxLength) {
      maxLength = i - k + 1;
    }
  }
  return maxLength;
};

var lengthOfLongestSubstring = function (s) {
  var max = 0,
    count = 0;
  var subString = {};
  for (i = 0; i < s.length; i++) {
    if (!subString[s[i]]) {
      subString[s[i]] = i + 1;
      count++;
    } else {
      i = subString[s[i]] - 1;
      count = 0;
      subString = {};
    }
    if (max < count) {
      max = count;
    }
  }
  return max;
};
