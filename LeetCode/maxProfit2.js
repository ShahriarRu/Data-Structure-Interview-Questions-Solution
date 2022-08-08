var maxProfit = function (prices) {
  let buyDay = 0,
    buyPrice = 0,
    sellDay = 1,
    sellPrice = 0,
    profit = 0;
  let profitArray = [0];
  while (sellDay <= prices.length - 1) {
    if (prices[buyDay] < prices[sellDay]) {
      buyPrice = prices[buyDay];
      while (prices[sellDay + 1] > prices[sellDay]) {
        sellDay++;
      }

      sellPrice = prices[sellDay];
      profit += sellPrice - buyPrice;

      profitArray.push(sellPrice - buyPrice);
      buyDay = sellDay + 1;
      sellDay = buyDay + 1;
    } else {
      buyDay++;
      sellDay++;
    }
  }
  let newProfit = profitArray.sort((a, b) => a - b);

  //return profitArray.length == 1 ? 0: profitArray[profitArray.length-1]+profitArray[profitArray.length-2];
  return newProfit;
};

console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
