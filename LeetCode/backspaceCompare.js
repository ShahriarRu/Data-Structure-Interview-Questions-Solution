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

const buildString = function (string) {
  const builtString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
};

var backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};
const string1 = "ab#z";
const string2 = "az#z";
console.log(backspaceCompare(string1, string2));
