/* eslint-disable no-undef */

const { greet, greetArrayLanguage } = require('../utils/utils.js')

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
  expect(result).toBe('Hello, Amy and Brian. AND HELLO CHARLOTTE!')
})

test('if there are more than 2 names with one in uppercase at the second place', () => {
  const name = ['Amy', 'BRIAN', 'Charlotte']
  const result = greet(name)
  expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
})

test('if there are more than 2 names with one in uppercase at the first place', () => {
  const name = ['AMY', 'Brian', 'Charlotte']
  const result = greet(name)
  expect(result).toBe('Hello, Brian and Charlotte. AND HELLO AMY!')
})

test('if function greetCaps returns all uppercase names', () => {
  const name = ['AMY', 'BRIAN', 'Charlotte', 'MARIO']
  const result = greet(name)
  expect(result).toBe('Hello, Charlotte. AND HELLO AMY, BRIAN AND MARIO!')
})

test('if there is a language selected and it is fr', () => {
  const name = ['Kratos', 'Thanatos', 'fr']
  const result = greet(name)
  expect(result).toBe('Bonjour, Kratos et Thanatos.')
})

test('if there is a language selected and it is nl', () => {
  const name = ['Kratos', 'Thanatos', 'nl']
  const result = greet(name)
  expect(result).toBe('Hallo, Kratos en Thanatos.')
})

test('if function greetCaps returns all uppercase names', () => {
  const name = ['AMY', 'BRIAN', 'MARIO']
  const result = greet(name)
  expect(result).toBe('HELLO AMY, BRIAN AND MARIO!')
})