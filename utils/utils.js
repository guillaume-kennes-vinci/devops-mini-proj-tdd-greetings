/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function greet (name) {
  if (Array.isArray(name)) {
    return greetArray(name)
  } else if (name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  } else if (name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  } else {
    return 'Hello, ' + name + '.'
  }
}

function greetArray (names) {
  const second = names[names.length - 2]
  if (second === second.toUpperCase()) {
    return 'Hello, ' + names[names.length - 3] + ', ' + names[names.length - 1] + '. AND HELLO ' + second + '!'
  }
  const allButLast = names.slice(0, -1).join(', ')
  const last = names[names.length - 1]
  if (last.toUpperCase() === last) {
    return 'Hello, ' + allButLast + '. AND HELLO ' + last + '!'
  }
  return 'Hello, ' + allButLast + ' and ' + last + '.'
}

module.exports = { greet }
