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

test('if name equals Bobbidibob', () => {
  const name = 'Bobbidibob'
  const result = greet(name)
  expect(result).toBe('Hello, Bobbidibob.')
})

test('if name equals JERRY', () => {
  const name = 'JERRY'
  const result = greet(name)
  expect(result).toBe('HELLO, JERRY!')
})

test('if name equals JERRified', () => {
  const name = 'JERRified'
  const result = greet(name)
  expect(result).toBe('Hello, JERRified.')
})

test('if there are 2 names', () => {
  const name = ['Jill', 'Jane']
  const result = greet(name)
  expect(result).toBe('Hello, Jill and Jane.')
})

test('if there are more than 2 names', () => {
  const name = ['Amy', 'Brian', 'Charlotte']
  const result = greet(name)
  expect(result).toBe('Hello, Amy, Brian and Charlotte.')
})

test('if there are more than 2 names with one in uppercase at the end', () => {
  const name = ['Amy', 'Brian', 'CHARLOTTE']
  const result = greet(name)
  expect(result).toBe('Hello, Amy, Brian. AND HELLO CHARLOTTE!')
})

test('if there are more than 2 names with one in uppercase at the second place', () => {
  const name = ['Amy', 'BRIAN', 'Charlotte']
  const result = greet(name)
  expect(result).toBe('Hello, Amy, Charlotte. AND HELLO BRIAN!')
})
