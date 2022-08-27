/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  stack = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (stack.length < 1) {
        return false;
      }
      if (s[i] == stack.pop()) {
        continue;
      } else {
      }
    }
  }
  console.log(stack);
};

console.log(isValid((s = "()[]{}")));
