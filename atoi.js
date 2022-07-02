/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  sign = 1;
  flag = 0;
  let isDigit = function (digit) {
    if ((digit >= "0") & (digit <= "9")) {
      return true;
    } else {
      return false;
    }
  };
  for (i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      continue;
    }
    if (s[i] == "-" || s[i] == "+") {
      if (s[i] == "-") {
        sign = -1;
      }
      if (!isDigit(s[i + 1])) {
        return 0;
      }
    } else if (isDigit(s[i])) {
      start = i;
      flag = 1;
      for (i; isDigit(s[i]); i++) {
        continue;
      }
      end = i;
      break;
    } else {
      return 0;
    }
  }

  if (flag) {
    num = Number(s.slice(start, end)) * sign;
  } else {
    return 0;
  }

  if (num < -2147483648) {
    return -2147483648;
  } else if (num > 2147483647) {
    return 2147483647;
  } else {
    return num;
  }
};

console.log(myAtoi((s = "+1")));
