const helloWorld = function() {
  return 'Hello World'
}

test('Hello World Test', () => {
  expect(helloWorld()).toBe('Hello World')
})