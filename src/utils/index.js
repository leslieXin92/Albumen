const useReturn = require('./useReturn')
const throwError = require('./throwError')
const log = require('./log')

module.exports = {
  ...useReturn,
  ...throwError,
  ...log
}
