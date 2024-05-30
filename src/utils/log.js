const log = (str, color = 'cyan') => {
  const colorCodes = {
    'black': '\x1b[30m',
    'red': '\x1b[31m',
    'green': '\x1b[32m',
    'yellow': '\x1b[33m',
    'blue': '\x1b[34m',
    'magenta': '\x1b[35m',
    'cyan': '\x1b[36m',
    'white': '\x1b[37m'
  }
  const colorCode = colorCodes[color]
  console.log('')
  console.log(`\x1b[1m\x1b[3m${colorCode}%s\x1b[0m`, str)
  console.log('')
}

module.exports = {
  log
}
