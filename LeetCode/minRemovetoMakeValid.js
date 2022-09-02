/**
 * @param {string} s
 * @return {string}
 */

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

var minRemoveToMakeValid = function (s) {
  stack = [];
  index = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
      index.push(i);
    } else if (s[i] == ")" && stack.length == 0) {
      index.push(i);
    } else if (s[i] == ")") {
      stack.pop();
      index.pop();
    }
  }

  for (var i = index.length - 1; i >= 0; i--) {
    s = setCharAt(s, index[i], "");
  }

  return s;
};

//optimized
/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function (s) {
  stack = [];
  index = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
      index.push(i);
    } else if (s[i] == ")" && stack.length == 0) {
      index.push(i);
    } else if (s[i] == ")") {
      stack.pop();
      index.pop();
    }
  }
  string = "";
  for (var i = 0, ind = 0; i < s.length; i++) {
    if (index[ind] != i) {
      string += s[i];
      continue;
    }
    ind++;
  }

  return string;
};
