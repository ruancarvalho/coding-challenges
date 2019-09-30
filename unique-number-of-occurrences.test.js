/**
 * Given an array of integers arr, write a function that returns
 *  true if and only if the number of occurrences of each value 
 * in the array is unique.
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

  let result = false;
  let hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashmap.hasOwnProperty(arr[i])) {
      hashmap[arr[i]] += 1;
    } else {
      hashmap[arr[i]] = 1;
    }
  }

  let occurrencesMap = {}

  for (let [key, item] of Object.entries(hashmap)) {
    occurrencesMap[item] = null
  }

  result = Object.keys(hashmap).length === Object.keys(occurrencesMap).length;

  return result;
};

/**
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 */
test('Example 1', () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true)
})

test('Example 2', () => {
  expect(uniqueOccurrences([1, 2])).toBe(false)
})

test('Example 3', () => {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true)
})