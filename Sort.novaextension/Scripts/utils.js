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
