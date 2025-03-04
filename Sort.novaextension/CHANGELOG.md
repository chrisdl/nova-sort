## Version 2.2.0 (2023-04-16)

Spring cleaning.

  - [MAINTENANCE] Node 18, Add @chrisdl as codeowner, update npm packages, update github actions versions. [#17](https://github.com/chrisdl/nova-sort/pull/17)
  - [MAINTENANCE] Fix variable name readability issue deepsource was complaining about. [#16](https://github.com/chrisdl/nova-sort/pull/16)

## Version 2.1.0 (2022-04-27)

Attempt to detect numeric (currently very basic, works only if you are sorting numbers, not strings of numbers for example) values in what is being sorted and add the `numeric: true` configuration to the Intl.Collator sorter to make it sort the numbers properly.

  - [FEATURE] Add numeric detection [#14](https://github.com/chrisdl/nova-sort/pull/14)

## Version 2.0.0 (2022-01-24)

This version changes how the sorting works. We used to use the built in javascript `.sort()` but it behaved in a way that users did not find intuitive (especially regarding uppercase vs lowercase). This version uses a new sorting algorithm (which  you can see in `utils.js`) that uses the [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) for better sorting. It also adds a case-insensitive mode.

  - [FEATURE] Updating the sorting algorithm to use Intl.Collator [#12](https://github.com/chrisdl/nova-sort/pull/12)
  - [FEATURE] Adds case insensitive sorting. [#12](https://github.com/chrisdl/nova-sort/pull/12)
  - [DOCS] Update docs to be very specific about what sorting behavior users can expect [#12](https://github.com/chrisdl/nova-sort/pull/12)

## Version 1.3.7 (2021-01-21)

  - [FEATURE] New Logo Yay! [#9](https://github.com/chrisdl/nova-sort/pull/9)
  - [DOCS] Adding gif to readme to show usage. [#10](https://github.com/chrisdl/nova-sort/pull/10)
  - [DOCS] Adding some examples to the readme. [#11](https://github.com/chrisdl/nova-sort/pull/11)

## Version 1.3.3 (2020-11-20)

  - [FEATURE] remove the stupid `-->` arrows from the command names. [#3](https://github.com/chrisdl/nova-sort/pull/3)
  - [DEV] adding eslint and standardjs. [#2](https://github.com/chrisdl/nova-sort/pull/2)
  - Switching to semver.
  - [FEATURE] Support for sorting across multiple ranges. [#1](https://github.com/chrisdl/nova-sort/pull/1)

## Version 1.2 (2020-10-27)

Added a picture to readme to make it more obvious what the extension does.

## Version 1.1 (2020-10-17)

Readme updates.

## Version 1.0 (2020-10-17)

Initial release.
