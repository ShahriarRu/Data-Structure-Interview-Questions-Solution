var climbStairs = function (n) {
  let first = 0;
  let second = 1;
  let temp;
  let i = 0;
  while (i < n) {
    temp = first + second;
    first = second;
    second = temp;
    i++;
  }
  return second;
};

//1 = 1    -> F
//2 = 2    -> S
//3 = 3    -> T
//4 = 5
//5 = 8
//6 = 13
