/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  list = [];
  for (let str in strs) {
    temp = strs[str]
      .split("")
      .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
      .join("");
    if (!list[temp]) {
      list[temp] = [];
      list[temp].push(strs[str]);
    } else {
      list[temp].push(strs[str]);
    }
  }
  return Object.values(list);
};
