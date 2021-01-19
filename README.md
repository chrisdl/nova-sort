[![DeepSource](https://deepsource.io/gh/chrisdl/nova-sort.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/chrisdl/nova-sort/?ref=repository-badge)
[![Build Status](https://travis-ci.com/chrisdl/nova-sort.svg?branch=master)](https://travis-ci.com/chrisdl/nova-sort)

# Sort

Extension for nova.app that allows you to perform simple sorting on highlighted text.

![usage](https://raw.githubusercontent.com/chrisdl/nova-sort/master/usage.gif)

# Usage

Currently you can sort in 4 different ways:

  - Sort multiple lines alphanumerically.
  - Sort content of one or more lines. For example a line containing `cba` will become `abc`.
  - Sort multiple lines based on length (the number of characters including whitespace).
  - Sort multiple lines based on length but reversed.

# Examples

```js
// 1. Sort inline
cba120 --> 012abc

// 2. Sort inline (multiline)
cba
210
// Becomes
abc
012

// 3. Sort lines
f
e
d
// Becomes
d
e
f

// 4. Sort lines based on length
aaa
aa
a
// Becomes
a
aa
aaa

// 5. Sort lines (length reversed)
b
bbb
bb
bbbb
// Becomes
bbbb
bbb
bb
b
```

