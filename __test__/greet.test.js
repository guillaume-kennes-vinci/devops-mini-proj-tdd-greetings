/* eslint-disable no-undef */

const { greet } = require('../utils/utils.js')

test('if no name', () => {
  const name = ''
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})

test('if name equals Bob', () => {
  const name = 'Bob'
  const result = greet(name)
  expect(result).toBe('Hello, Bob.')
})

test('if name equals Bob', () => {
  const name = 'Bobbidibob'
  const result = greet(name)
  expect(result).toBe('Hello, Bobbidibob.')
})
