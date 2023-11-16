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
  if (namesCap.length === 0) {
    return greetLowercaseArray(names)
  } else {
    const allButLastCap = namesCap.slice(0, -1).join(', ')
    const lastCap = namesCap[namesCap.length - 1]
    return greetLowercaseArray(names) + ' AND ' + greetUppercaseArray(namesCap)
  }
}

function greetLowercaseArray (names) {
  const allButLast = names.slice(0, -1).join(', ')
  const last = names[names.length - 1]
  return 'Hello, ' + (allButLast.length > 0 ? allButLast + ' and ' : '') + last + '.'
}

function greetUppercaseArray (names) {
  const allButLast = names.slice(0, -1).join(', ')
  const last = names[names.length - 1]
  return 'HELLO ' + (allButLast.length > 0 ? allButLast + ' AND ' : '') + last + '!'
}

module.exports = { greet }
