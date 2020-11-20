/* globals nova */

const utils = require('utils')

exports.activate = function () {
  // Do work when the extension is activated
}

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
}

nova.commands.register('sort.lines', (editor) => {
  for (const range of editor.selectedRanges) {
    const text = editor.getTextInRange(range)
    const lines = text.split('\n')
    const isLastLineANewline = utils.lastInArrayIsEmptyString(lines)

    // Remove trailing newline before shuffling (so it doesn't end up in middle)
    if (isLastLineANewline) {
      lines.pop()
    }
    const sortedLines = lines.sort()

    // Is there a way to store up a bunch of these edits and perform one big one?
    editor.edit(function (e) {
      if (isLastLineANewline) {
        sortedLines.push('')
      }
      e.replace(range, sortedLines.join('\n'))
    })
  }
})

nova.commands.register('sort.inline', (editor) => {
  const range = editor.selectedRange
  const text = editor.getTextInRange(range)
  const lines = text.split('\n')
  const isLastLineANewline = utils.lastInArrayIsEmptyString(lines)

  // Remove trailing newline before shuffling (so it doesn't end up in middle)
  if (isLastLineANewline) {
    lines.pop()
  }
  const sortedLines = lines.map(line => {
    return line.split('').sort().join('')
  })

  editor.edit(function (e) {
    if (isLastLineANewline) {
      sortedLines.push('')
    }
    e.replace(range, sortedLines.join('\n'))
  })
})

nova.commands.register('sort.byLineLength', (editor) => {
  const range = editor.selectedRange
  const text = editor.getTextInRange(range)
  const lines = text.split('\n')
  const isLastLineANewline = utils.lastInArrayIsEmptyString(lines)

  // Remove trailing newline before shuffling (so it doesn't end up in middle)
  if (isLastLineANewline) {
    lines.pop()
  }
  const sortedLines = lines.sort(utils.sortByLineLength)

  editor.edit(function (e) {
    if (isLastLineANewline) {
      sortedLines.push('')
    }
    e.replace(range, sortedLines.join('\n'))
  })
})

nova.commands.register('sort.byLineLengthReversed', (editor) => {
  const range = editor.selectedRange
  const text = editor.getTextInRange(range)
  const lines = text.split('\n')
  const isLastLineANewline = utils.lastInArrayIsEmptyString(lines)

  // Remove trailing newline before shuffling (so it doesn't end up in middle)
  if (isLastLineANewline) {
    lines.pop()
  }
  const sortedLines = lines.sort(utils.sortByLineLengthReversed)

  editor.edit(function (e) {
    if (isLastLineANewline) {
      sortedLines.push('')
    }
    e.replace(range, sortedLines.join('\n'))
  })
})
