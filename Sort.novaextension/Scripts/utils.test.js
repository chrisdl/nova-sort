const {
  lastInArrayIsEmptyString,
  sortByLineLength,
  sortByLineLengthReversed
} = require('./utils.js')

test('sortByLineLength', () => {
  expect(['a', 'aa', 'b'].sort(sortByLineLength)).toEqual(['a', 'b', 'aa'])

  // ignores whitespace
  expect(['c', '  a'].sort(sortByLineLength)).toEqual(['c', '  a'])
  expect(['ccc', '  aa'].sort(sortByLineLength)).toEqual(['  aa', 'ccc'])
})

test('sortByLineLengthReversed', () => {
  expect(['a', 'aa', 'b'].sort(sortByLineLengthReversed)).toEqual(['aa', 'a', 'b'])

  // ignores whitespace
  expect(['c', '  a'].sort(sortByLineLengthReversed)).toEqual(['c', '  a'])
  expect(['ccc', '  aa'].sort(sortByLineLengthReversed)).toEqual(['ccc', '  aa'])
})

test('lastInArrayisEmptyString', () => {
  expect(lastInArrayIsEmptyString(['a', ''])).toBe(true)
  expect(lastInArrayIsEmptyString(['a', 'b'])).toBe(false)
  expect(lastInArrayIsEmptyString(['', 'b'])).toBe(false)
  expect(lastInArrayIsEmptyString([])).toBe(false)
  expect(lastInArrayIsEmptyString([null])).toBe(false)
  expect(lastInArrayIsEmptyString([undefined])).toBe(false)
  expect(lastInArrayIsEmptyString([1, 2])).toBe(false)
})
