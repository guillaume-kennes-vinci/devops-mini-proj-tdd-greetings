/* eslint-disable no-undef */

const { greet } = require('../utils/utils.js')

test('if no name', () => {
  const name = ''
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})
