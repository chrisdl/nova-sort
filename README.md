[![DeepSource](https://deepsource.io/gh/chrisdl/nova-sort.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/chrisdl/nova-sort/?ref=repository-badge)
[![Build Status](https://travis-ci.com/chrisdl/nova-sort.svg?branch=master)](https://travis-ci.com/chrisdl/nova-sort)

# Sort

Extension for nova.app that allows you to perform simple sorting on selections.

![usage](https://raw.githubusercontent.com/chrisdl/nova-sort/master/usage.gif)

# Usage

Currently you can sort in 6 different ways:

  - Sort inline
  - Sort inline (case sensitive)
  - Sort lines alphanumerically
  - Sort lines alphanumerically (case sensitive)
  - Sort lines based on length
  - Sort lines based on length (reversed)

# Examples

```js
// 1. Sort inline
cba120 --> 012abc

// if case sensitive
cba120CBA --> 012aAbBcC

// 2. Sort inline (multiline)
cba
210
// Becomes
abc
012

// 3. Sort lines (case sensitive)
ABC
abc
123
// Becomes
123
abc
ABC

// and
ABC1
abc2
// Becomes
ABC1
abc2 // the numbers matter more than the case.


// 3.1 sorting lines detects numeric.
2
10
3
// Becomes
2
3
10

// 4. Sort lines (case insensitive)
ABC
abc
123
// Becomes
123
ABC
abc

// 5. Sort lines based on length
aaa
aa
a
// Becomes
a
aa
aaa

// 6. Sort lines (length reversed)
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

# Sorting

Behind the scenes we are using the [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) for the sorting. Since we are not hardcoding the locale I suspect the sorting will actually be slightly different depending on your locale and the language you are sorting, but I am not sure. If this is the case that's fantastic!. If you can confirm or deny this please open an issue with some examples.

Nova-sort does detect if what you are sorting is only numeric and will try to adjust for this and perform a numeric sort.


# Development

Run tests using `npm test` or `npx jest <flags>`


# New stewardship

I unfortunately no longer use Nova, if anyone wants to take over stewardship of this extension I would be happy to accomodate. I would suggest contacting me through LinkedIn https://www.linkedin.com/in/cdilorenzo/
