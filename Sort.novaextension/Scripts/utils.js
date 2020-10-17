const TAB_CHAR_CODE = 9;

function isLastCharacterANewLine(str) {
  return str.slice(-1) === '\n';
}

function cleanText(text) {
  if (isLastCharacterANewLine(text)) {
    text = text.slice(0, -1);
  }
  return text;
}

function createLines(text) {
  return text.split('\n')
    .filter(x => x !== "");
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
  cleanText,
  createLines,
  isLastCharacterANewLine,
  sortByLineLength,
  sortByLineLengthReversed
}