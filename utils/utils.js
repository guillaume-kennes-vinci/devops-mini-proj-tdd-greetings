/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function greet (name) {
  if (name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  } else if (name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  } else {
    return 'Hello, ' + name + '.'
  }
}

module.exports = { greet }
