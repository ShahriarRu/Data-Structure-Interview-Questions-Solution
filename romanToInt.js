/**
 * @param {string} s
 * @return {number}
 */
let Roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  total = 0;
  for (i = 0; i < s.length; i++) {
    if (Roman[s[i]] < Roman[s[i + 1]]) {
      total -= Roman[s[i]];
      continue;
    }
    total += Roman[s[i]];
  }
  return total;
};
