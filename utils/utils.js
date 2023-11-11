/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function greet (name) {
  if (name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  }
}

module.exports = { greet }
