/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  slen = s.length;
  tlen = t.length;

  while (slen > 0 || tlen > 0) {
    //backspace the elements in both s and t separately while keeping s and t unchanged.
    if (s[slen - 1] == "#") {
      count = 2;
      while (count > 0) {
        count--;
        slen--;
        if (s[slen - 1] == "#") {
          count += 2;
        }
      }
    }
    if (t[tlen - 1] == "#") {
      count = 2;
      while (count > 0) {
        count--;
        tlen--;
        if (t[tlen - 1] == "#") {
          count += 2;
        }
      }
    }
    if (s[slen - 1] == t[tlen - 1]) {
      slen--;
      tlen--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
