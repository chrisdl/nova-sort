function lastInArrayIsEmptyString (arr) {
  return arr.slice(-1)[0] === ''
}

function sortByLineLength (a, b) {
  a = a.trim()
  b = b.trim()
  if (a.length === b.length) return 0
  return a.length - b.length
}

function sortByLineLengthReversed (a, b) {
  return sortByLineLength(b, a)
}

// ABCabc321 --> 123aAbBcC
function sortCaseSensitive (a, b) {
  const result = new Intl.Collator(
    undefined,
    {
      ignorePunctuation: true,
      numeric: true
    }
  ).compare(a, b)
  return result
}

function sortCaseInsensitive (a, b) {
  return new Intl.Collator(
    undefined,
    {
      ignorePunctuation: true,
      sensitivity: 'base',
      numeric: true
    }
  ).compare(a, b)
}

module.exports = {
  lastInArrayIsEmptyString,
  sortByLineLength,
  sortByLineLengthReversed,
  sortCaseSensitive,
  sortCaseInsensitive
}
