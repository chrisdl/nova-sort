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
  ].sort(sortCaseSensitive())).toEqual(['Gallery', 'GO'])
  expect('ABCabc321'.split('').sort(sortCaseSensitive()).join(''))
    .toEqual('123aAbBcC')
})

test('sortCaseInsensitive', () => {
  expect([
    'GO',
    'Gallery'
  ].sort(sortCaseInsensitive())).toEqual(['Gallery', 'GO'])

  expect('ABCabc321'.split('').sort(sortCaseInsensitive()).join(''))
    .toEqual('123AaBbCc')

  expect('bB'.split('').sort(sortCaseInsensitive()).join(''))
    .toEqual('bB')
  expect('Bb'.split('').sort(sortCaseInsensitive()).join(''))
    .toEqual('Bb')

  expect(['"2"', '"10"'].sort(sortCaseInsensitive()))
    .toEqual(['"10"', '"2"'])
  expect(['2a', '1a'].sort(sortCaseInsensitive()))
    .toEqual(['1a', '2a'])
  expect(['alpha10', 'alpha2'].sort(sortCaseInsensitive()))
    .toEqual(['alpha10', 'alpha2'])
})

test('Capitalization matters', () => {
  expect([
    'ABC',
    'abc',
    'Abc',
    'aBc',
    'abC',
    'ABc'
  ].sort(sortCaseSensitive()))
    .toEqual([
      'abc',
      'abC',
      'aBc',
      'Abc',
      'ABc',
      'ABC'
    ])
})

// They are all treated the same.
test('Capitalization (intentionally) does not matter', () => {
  expect([
    'ABC',
    'abc',
    'Abc',
    'aBc',
    'abC',
    'ABc'
  ].sort(sortCaseInsensitive()))
    .toEqual([
      'ABC',
      'abc',
      'Abc',
      'aBc',
      'abC',
      'ABc'
    ])
})

// They are all treated the same.
test('Numbers before letters.', () => {
  expect([
    'ABC',
    123,
    '123'
  ].sort(sortCaseInsensitive()))
    .toEqual([
      123,
      '123',
      'ABC'
    ])
})

test('Numeric sorting is a bit dumb (intentionally).', () => {
  expect([
    1,
    2,
    10
  ].sort(sortCaseInsensitive()))
    .toEqual([
      1,
      10,
      2
    ])
  expect([
    '1',
    '2',
    '10'
  ].sort(sortCaseSensitive()))
    .toEqual([
      '1',
      '10',
      '2'
    ])
})

test('Characters matters more than capitalization', () => {
  // Even though we give preference to lowercase
  // the fact that there is a 1 after 'ABC' and a 2
  // trailing 'abc' means ABC1 gets precedence
  expect([
    'ABC1',
    'abc2'
  ].sort(sortCaseSensitive()))
    .toEqual([
      'ABC1',
      'abc2'
    ])
})

test('Accent matters', () => {
  expect([
    'ä',
    'a'
  ].sort(sortCaseSensitive()))
    .toEqual([
      'a',
      'ä'
    ])
})
