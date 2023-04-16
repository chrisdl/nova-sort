function lastInArrayIsEmptyString (arr) {
  return arr.slice(-1)[0] === ''
}

function sortByLineLength (a, b) {
  const trimmedA = a.trim()
  const trimmedB = b.trim()
  if (trimmedA.length === trimmedB.length) {
    return 0
  }
  return trimmedA.length - trimmedB.length
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
