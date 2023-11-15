/* eslint-disable no-undef */

const { greet } = require('../utils/utils.js')

test('if no name (void)', () => {
  const name = ''
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})

test('if no name (undefined)', () => {
  const name = undefined
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})

test('if no name (null)', () => {
  const name = null
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

test('if name equals JERRY', () => {
  const name = 'JERRY'
  const result = greet(name)
  expect(result).toBe('HELLO, JERRY!')
})
