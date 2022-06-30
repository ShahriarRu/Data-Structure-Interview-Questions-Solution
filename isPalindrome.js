/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .replace(/[`~!@#$%^&*()_|+\-=?; :'",.<>\{\}\[\]\\\/]/gi, "")
    .toLowerCase();
  len = s.length;
  for (i = 0; i < len / 2; i++) {
    if (s[i] != s[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
