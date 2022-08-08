var maxProfit = function (prices) {
  let buyDay = 0,
    buyPrice = 0,
    sellDay = 1,
    sellPrice = 0,
    profit = 0;
  while (sellDay <= prices.length - 1) {
    if (prices[buyDay] < prices[sellDay]) {
      buyPrice = prices[buyDay];
      while (prices[sellDay + 1] > prices[sellDay]) {
        sellDay++;
      }
      sellPrice = prices[sellDay];
      profit += sellPrice - buyPrice;
      buyDay = sellDay + 1;
      sellDay = buyDay + 1;
    } else {
      buyDay++;
      sellDay++;
    }
  }
  return profit;
};
