/**
 * Given a matrix of M x N elements (M rows, N columns), 
 * return all elements of the matrix in diagonal order.
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {

  if (!matrix.length) return [];

  let row = 0, col = 0, counter = 0
  let moveUp = true
  const rows = matrix.length, cols = matrix[0].length
  const output = [];

  while (counter < rows * cols) {
    if (moveUp) {
      for (; row >= 0 && col < cols; col++ , row--) {
        output.push(matrix[row][col]);
        counter++;
      }

      if (row < 0 && col <= cols - 1)
        row = 0;
      if (col === cols) {
        row = row + 2;
        col--;
      }
    } else {
      for (; col >= 0 && row < rows; row++ , col--) {
        output.push(matrix[row][col]);
        counter++;
      }

      if (col < 0 && row <= rows - 1)
        col = 0;
      if (row === rows) {
        col = col + 2;
        row--;
      }
    }

    moveUp = !moveUp;
  }

  return output;
}

test('Example', () => {
  expect(
    findDiagonalOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  ).toEqual(
    [1, 2, 4, 7, 5, 3, 6, 8, 9]
  )
})

test('Example 2', () => {
  expect(
    findDiagonalOrder([])
  ).toEqual(
    []
  )
})