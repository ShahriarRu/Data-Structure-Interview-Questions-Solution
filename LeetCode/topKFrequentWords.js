var topKFrequent = function (words, k) {
  list = {};
  words = words.sort();

  for (i = 0; i < words.length; i++) {
    if (list[words[i]]) {
      list[words[i]]++;
    } else {
      list[words[i]] = 1;
    }
  }

  return Object.keys(list)
    .sort((a, b) => list[b] - list[a])
    .slice(0, k);
};
