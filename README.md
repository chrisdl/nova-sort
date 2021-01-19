[![DeepSource](https://deepsource.io/gh/chrisdl/nova-sort.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/chrisdl/nova-sort/?ref=repository-badge)
[![Build Status](https://travis-ci.com/chrisdl/nova-sort.svg?branch=master)](https://travis-ci.com/chrisdl/nova-sort)

# Sort

Extension for nova.app that allows you to perform simple sorting on highlighted text.

![usage](https://raw.githubusercontent.com/chrisdl/nova-sort/master/usage.gif)

# Usage

Currently you can sort in 4 different ways:

  - Sort multiple lines based on a regular 0-9a-z sort.
  - Sort one or more lines internally. For example a line containing `cba` will become `abc`.
  - Sort multiple lines based on length (the number of characters including whitespace).
  - Sort multiple lines based on length but reversed.
