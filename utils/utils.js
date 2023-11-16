/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function greet (name) {
  if (Array.isArray(name)) {
    return greetCapsIncludedArray(name)
  } else if (name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  } else if (name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  } else {
    return 'Hello, ' + name + '.'
  }
}

function greetCapsIncludedArray (names) {
  const namesCap = []
  let index = 0

  while (index < names.length) {
    if (names[index] === names[index].toUpperCase()) {
      namesCap.push(names[index])
      names.splice(index, 1)
    } else {
      index++
    }
  }
  const allButLast = names.slice(0, -1).join(', ')
  const last = names[names.length - 1]
  if (namesCap.length === 0) {
    return 'Hello, ' + (allButLast.length > 0 ? allButLast + ' and ' : '') + last + '.'
  } else {
    const allButLastCap = namesCap.slice(0, -1).join(', ')
    const lastCap = namesCap[namesCap.length - 1]
    return 'Hello, ' + (allButLast.length > 0 ? allButLast + ' and ' : '') + last + '. AND HELLO ' + (allButLastCap.length > 0 ? allButLastCap + ' AND ' : '') + lastCap + '!'
  }
}

module.exports = { greet }
