const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')//runs even when no print command as the required file calls the function
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)