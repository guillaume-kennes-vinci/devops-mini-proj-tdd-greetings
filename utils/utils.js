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

function greetArray(name) {
  let last = name[name.length - 1]
  if (last === 'fr'||last ==='en'||last ==='nl'){
    return greetArrayLanguage(name, last)
  } else {
    return greetArrayNoLanguage(name)
  }
}

function greetArrayLanguage (name, last) {
  let lastName = name[name.length - 2]
  let allButLastName = name.slice(0, -2).join(', ')
  let greeting = 'Hello'
  let joinword = 'and'
  if (last === 'fr') {
    greeting = 'Bonjour'
    joinword = 'et'
  } else if (last === 'nl') {
    greeting = 'Hallo'
    joinword = 'en'
  }
  return greeting + ', ' + allButLastName + ' ' + joinword + ' ' + lastName + '.'
}


function greetArrayNoLanguage (name) {
  const namesCap = []
  let index = 0

  while (index < name.length) {
    if (name[index] === name[index].toUpperCase()) {
      namesCap.push(name[index])
      name.splice(index, 1)
    } else {
      index++
    }
  }
  if (namesCap.length === 0) {
    return greetLowercaseArray(name)
  } else if (name.length === 0){
    return greetUppercaseArray(namesCap)
  } else {
    return greetLowercaseArray(name) + ' AND ' + greetUppercaseArray(namesCap)
  }
}

function greetLowercaseArray (name) {
  const allButLast = name.slice(0, -1).join(', ')
  const last = name[name.length - 1]
  return 'Hello, ' + (allButLast.length > 0 ? allButLast + ' and ' : '') + last + '.'
}

function greetUppercaseArray (name) {
  const allButLast = name.slice(0, -1).join(', ')
  const last = name[name.length - 1]
  return 'HELLO ' + (allButLast.length > 0 ? allButLast + ' AND ' : '') + last + '!'
}

module.exports = { greet }
