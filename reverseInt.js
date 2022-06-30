/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //check if the number is negative or positive
  if (x < 0) {
    flag = -1;
    x *= flag;
  } else {
    flag = 1;
  }

  size = Math.floor(Math.log10(x)); //calulating number of digits
  num = 0;

  //calculating the reverse number by finding quotiant of 10 and
  //then multiply them with their corresponding  base value
  for (i = size; i >= 0; i--) {
    num = num + 10 ** i * (x % 10);
    x = Math.floor(x / 10);
  }
  num *= flag;

  //checking the range
  if (num >= -2147483648 && num <= 2147483647) {
    return num;
  } else {
    return 0;
  }
};
