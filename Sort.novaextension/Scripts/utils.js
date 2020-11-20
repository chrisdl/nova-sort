function lastInArrayIsEmptyString(arr) {
  return arr.slice(-1)[0] === ''
}

function sortByLineLength(a, b) {
  a = a.trim();
  b = b.trim();
  if (a.length === b.length) return 0;
  return a.length - b.length;
}

function sortByLineLengthReversed(a, b) {
  a = a.trim();
  b = b.trim();
  if (a.length === b.length) return 0;
  return b.length - a.length;
}


module.exports = {
  lastInArrayIsEmptyString,
  sortByLineLength,
  sortByLineLengthReversed
}