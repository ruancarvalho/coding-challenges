/**
 * Given a list of daily temperatures T, return a list such that, 
 * for each day in the input, tells you how many days you would 
 * have to wait until a warmer temperature. If there is no future day 
 * for which this is possible, put 0 instead.
 * 
 * For example, given the list of temperatures 
 * T = [73, 74, 75, 71, 69, 72, 76, 73], 
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * 
 * Note: The length of temperatures will be in the range [1, 30000]. 
 * Each temperature will be an integer in the range [30, 100].
 * 
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {

  let list = [];
  let days = 1;

  for (let i = 0; i < T.length; i++) {
    
    if (i === T.length - 1) {
      list.push(0);
      days = 1;
      break;
    }

    for (let j = i + 1; j < T.length; j++ ) {
      if (T[i] < T[j]) {
        list.push(days);
        days = 1;
        break;
      } else {
        days++;
        if (j === T.length - 1) {
          list.push(0);
          days = 1;
        }
      }
    }
  }

  return list
};

test('Example Test', () => {
  expect(
    dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
  ).toEqual(
    [1, 1, 4, 2, 1, 1, 0, 0]
  )
})

test('Example Test 02', () => {
  expect(
    dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])
  ).toEqual(
    [3, 1, 1, 2, 1, 1, 0, 1, 1, 0]
  )
})
