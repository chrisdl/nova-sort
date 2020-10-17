const utils = require('utils');

exports.activate = function() {
  // Do work when the extension is activated
}

exports.deactivate = function() {
  // Clean up state before the extension is deactivated
}

// It's very possible there is a better way to insert the lines
// than doing a full delete and then inserting them line by line from
// the top. Please get in touch if you are more familiar with the
// edit API =)
function insertLines(lines, range, e) {
  const nrLines = lines.length;
  for (let i = nrLines - 1; i >= 0; i--) {
    let line = `${lines[i]}`;
    
    // Remove trailing newline.
    if (i !== nrLines - 1) {
      line += '\n';
    }
    e.insert(range.start, line);
  }
}

nova.commands.register("sort.lines", (editor) => {
  const range = editor.selectedRange;
  const text = utils.cleanText(editor.getTextInRange(range));
  const lines = utils.createLines(text);
  const sortedLines = lines.sort();

  editor.edit(function(e) {
    e.delete(range);
    insertLines(sortedLines, range, e);
  });
});

nova.commands.register("sort.inline", (editor) => {
  const range = editor.selectedRange;
  const text = utils.cleanText(editor.getTextInRange(range));
  const lines = utils.createLines(text)
    .map(line => {
      const sorted = line.split("").sort().join("");
      return sorted;
    });
  editor.edit(function(e) {
    e.delete(range);
    insertLines(lines, range, e);
  });
});

nova.commands.register("sort.byLineLength", (editor) => {
  const range = editor.selectedRange;
  const text = utils.cleanText(editor.getTextInRange(range));
  const lines = utils.createLines(text).sort(utils.sortByLineLength);
  editor.edit(function(e) {
    e.delete(range);
    insertLines(lines, range, e);
  });
});

nova.commands.register("sort.byLineLengthReversed", (editor) => {
  const range = editor.selectedRange;
  const text = utils.cleanText(editor.getTextInRange(range));
  const lines = utils.createLines(text).sort(utils.sortByLineLengthReversed);
  editor.edit(function(e) {
    e.delete(range);
    insertLines(lines, range, e);
  });
});