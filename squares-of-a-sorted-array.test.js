/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  
  let tmp = []
  let size = A.length - 1

  for (let i = 0; i <= size / 2; i++) {
    tmp.push(A[i] * A[i])
    if (i !== size - i)
      tmp.push(A[size - i] * A[size - i])
  }

  return tmp.sort((a, b) => {
    return a - b
  })
};

test('Test 01', () => {
  expect(
    sortedSquares([-4, -1, 0, 3, 10])
  ).toEqual(
    [0, 1, 9, 16, 100]
  )
})

test('Test 02', () => {
  expect(
    sortedSquares([-7, -3, 2, 3, 11])
  ).toEqual(
    [4, 9, 9, 49, 121]
  )
})