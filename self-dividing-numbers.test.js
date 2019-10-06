/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {

  let range = []
  for (i = left; i <= right; i++)
    range.push(i)

  let numbers = []
  for (number of range) {
    if (number === 0 || number % 10 === 0) continue;

    let splitted = number.toString().split('')
    let isSelfDiv = true;

    for (part of splitted) {
      if (number % part !== 0) isSelfDiv = false;
    }        

    if (isSelfDiv) numbers.push(number);
  }

  return numbers
};

test('Test 01', () => {
  expect(
    selfDividingNumbers(1,22)
  ).toEqual(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
  )
})