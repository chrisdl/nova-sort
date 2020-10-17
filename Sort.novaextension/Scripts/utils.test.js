const {
  cleanText,
  sortByLineLength,
  sortByLineLengthReversed,
  createLines } = require('./utils.js');

test('returns text', () => {
  const text = `b
a
c`;
  expect(cleanText(text)).toBe(text)
});

test('removes stray newline from end if there is one to avoid weirdness', () => {
  const text = `b
a
c
`;
  const expected = `b
a
c`;
  expect(cleanText(text)).toBe(expected);
});

test('createLines does create lines', () => {
  const text = `b
1
2`;
  expect(createLines(text)).toEqual(['b','1','2'])
});

test('createLines removes newlines', () => {
  const text = `b

1
2`;
  expect(createLines(text)).toEqual(['b','1','2'])
});

test('sortByLineLength', () => {
  expect(['a', 'aa', 'b'].sort(sortByLineLength)).toEqual(['a', 'b', 'aa']);
  
  // ignores whitespace
  expect(['c', '  a'].sort(sortByLineLength)).toEqual(['c', '  a']);
  expect(['ccc', '  aa'].sort(sortByLineLength)).toEqual(['  aa', 'ccc']);
});

test('sortByLineLengthReversed', () => {
  expect(['a', 'aa', 'b'].sort(sortByLineLengthReversed)).toEqual(['aa', 'a', 'b']);
  
  // ignores whitespace
  expect(['c', '  a'].sort(sortByLineLengthReversed)).toEqual(['c', '  a']);
  expect(['ccc', '  aa'].sort(sortByLineLengthReversed)).toEqual(['ccc', '  aa']);
});
