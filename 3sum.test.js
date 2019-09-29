/**
 * https://leetcode.com/problems/3sum/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  if (nums.length < 3) {
    return [];
  }

  const isAllZero = !nums.some(item => item !== 0);

  if (isAllZero) {
    return [[0, 0, 0]];
  }

  let triplets = [], triplet = [];
  let curr, ptr1, ptr2, sum;
  let table = {};

  nums.sort((a, b) => a - b)

  for (curr = 0; curr < nums.length - 1; curr++) {

    ptr1 = curr + 1;
    ptr2 = nums.length - 1;

    while (ptr1 < ptr2) {
      sum = nums[curr] + nums[ptr1] + nums[ptr2];

      if (sum == 0) {
        triplet = [nums[curr], nums[ptr1], nums[ptr2]];
        triplet.sort((a, b) => a - b);

        ptr1++;
        ptr2--;

        if (!table[triplet.toString()]) {
          triplets.push(triplet);
          table[triplet] = true;
        }
      } else if (sum < 0) {
        ptr1++;
      } else {
        ptr2--;
      }
    }

  }

  return triplets;
};

test('Example 1', () => {
  expect(
    threeSum([-1, 0, 1, 2, -1, -4])
  ).toEqual(
    [[-1, -1, 2], [-1, 0, 1]]
  );
});