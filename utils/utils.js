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
  var last = names[names.length - 1]
  var allButLastName = names.slice(0, -1).join(', ')
  if(last === 'fr') {
    greeting = 'Bonjour'
    joinword = 'et'
    lastName = names[names.length - 2]
    allButLastName = names.slice(0, -2).join(', ')
  } else if (last === 'en'){
    greeting = 'Hello'
    joinword = 'and'
    lastName = names[names.length - 2]
    allButLastName = names.slice(0, -2).join(', ')
  } else {
    greeting = 'Hello'
    joinword = 'and'
    lastName = names[names.length - 1]
    allButLastName = names.slice(0, -1).join(', ')
  }

  return greeting+', ' + allButLastName + ' '+ joinword + ' ' + lastName + '.'
}

module.exports = { greet }
