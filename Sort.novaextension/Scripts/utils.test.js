const {
  lastInArrayIsEmptyString,
  sortByLineLength,
  sortByLineLengthReversed,
  sortCaseSensitive,
  sortCaseInsensitive
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

test('sortCaseSensitive', () => {
  expect([
    'GO',
    'Gallery'
  ].sort(sortCaseSensitive)).toEqual(['Gallery', 'GO'])
  expect('ABCabc321'.split('').sort(sortCaseSensitive).join(''))
    .toEqual('123aAbBcC')

  // Gives preference for lowercase
  expect('bB'.split('').sort(sortCaseSensitive).join(''))
    .toEqual('bB')
  expect('Bb'.split('').sort(sortCaseSensitive).join(''))
    .toEqual('bB')
})

test('sortCaseInsensitive', () => {
  // Gallery should still be before GO
  expect([
    'GO',
    'Gallery'
  ].sort(sortCaseInsensitive)).toEqual(['Gallery', 'GO'])

  expect('ABCabc321'.split('').sort(sortCaseInsensitive).join(''))
    .toEqual('123AaBbCc')

  expect('bB'.split('').sort(sortCaseInsensitive).join(''))
    .toEqual('bB')
  expect('Bb'.split('').sort(sortCaseInsensitive).join(''))
    .toEqual('Bb')

  expect(['"2"', '"10"'].sort(sortCaseInsensitive))
    .toEqual(['"2"', '"10"'])
  expect(['2a', '1a'].sort(sortCaseInsensitive))
    .toEqual(['1a', '2a'])
  expect(['alpha10', 'alpha2'].sort(sortCaseInsensitive))
    .toEqual(['alpha2', 'alpha10'])
})

test('js sorter', () => {
  expect([
    'GO',
    'Gallery'
  ].sort()).toEqual(['GO', 'Gallery'])
})
