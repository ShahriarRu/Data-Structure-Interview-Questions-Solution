/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits;
  }

  let new_array = digits.join("");
  let num = BigInt(new_array);
  num++;

  //let str_num = num.toLocaleString('fullwide', {useGrouping:false})
  let myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });

  return myArr;
};
