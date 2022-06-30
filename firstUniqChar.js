/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  s = s.split("");
  let map = {};
  for (i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = i + 1;
    } else {
      map[s[i]] = 1000000;
    }
  }
  index = Object.values(map).sort((a, b) => a - b);
  if (index) return index[0] - 1 > s.length ? -1 : index[0] - 1;
};

console.log(firstUniqChar((s = "aabbc")));
