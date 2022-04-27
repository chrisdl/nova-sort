function lastInArrayIsEmptyString (arr) {
  return arr.slice(-1)[0] === ''
}

function sortByLineLength (a, b) {
  const x = a.trim()
  const y = b.trim()
  if (x.length === y.length) return 0
  return x.length - y.length
}

function sortByLineLengthReversed (a, b) {
  return sortByLineLength(b, a)
}

// ABCabc321 --> 123aAbBcC
function sortCaseSensitive (options = {}) {
  const opts = { ...options, sensitivity: 'variant' }
  return new Intl.Collator(undefined, opts).compare
}

function sortCaseInsensitive (options = {}) {
  const opts = { ...options, sensitivity: 'accent' }
  return new Intl.Collator(undefined, opts).compare
}

function _isNumber (x) {
  if (typeof x !== 'string') return false
  return !isNaN(x) &&
         !Number.isNaN(Number.parseFloat(x, 10))
}

function isNumeric (arr) {
  return arr.every(_isNumber)
}

module.exports = {
  lastInArrayIsEmptyString,
  sortByLineLength,
  sortByLineLengthReversed,
  sortCaseSensitive,
  sortCaseInsensitive,
  isNumeric,
  _isNumber
}
