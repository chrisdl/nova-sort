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

module.exports = {
  lastInArrayIsEmptyString,
  sortByLineLength,
  sortByLineLengthReversed,
  sortCaseSensitive,
  sortCaseInsensitive
}
