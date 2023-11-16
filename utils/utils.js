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
  var lastName = names[names.length - 1]
  var allButLastName = names.slice(0, -1).join(', ')
  var greeting = 'Hello'
  var joinword = 'and'
  if (lastName === 'fr' || lastName === 'en' || lastName === 'nl'){
    var language = names[names.length - 1]
    lastName = names[names.length - 2]
    allButLastName = names.slice(0, -2).join(', ')
    if(language === 'fr') {
      greeting = 'Bonjour'
      joinword = 'et'
    } else if (language === 'en'){
      greeting = 'Hello'
      joinword = 'and'
    } else if (language === 'nl'){
      greeting = 'Hallo'
      joinword = 'en'
    }
  }
 
  return greeting+', ' + allButLastName + ' '+ joinword + ' ' + lastName + '.'
}

module.exports = { greet }
