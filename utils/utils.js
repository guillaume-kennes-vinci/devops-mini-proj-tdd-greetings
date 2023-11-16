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
  const first = names[0]
  const second = names[1]
  const last = names[names.length - 1]
  if (first === first.toUpperCase()) {
    return 'Hello, ' + second + ', ' + last + '. AND HELLO ' + first + '!'
  }
  if (second === second.toUpperCase()) {
    return 'Hello, ' + first + ', ' + last + '. AND HELLO ' + second + '!'
  }
  const allButLast = names.slice(0, -1).join(', ')
  if (last.toUpperCase() === last) {
    return 'Hello, ' + allButLast + '. AND HELLO ' + last + '!'
  }
  return 'Hello, ' + allButLast + ' and ' + last + '.'
}

module.exports = { greet }
