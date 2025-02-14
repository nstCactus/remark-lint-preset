# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [0.1.0] - 2025-02-14

### Added

- Extend from [remark-preset-lint-recommended](https://www.npmjs.com/package/remark-preset-lint-recommended)
  & [remark-gfm](https://www.npmjs.com/package/remark-gfm)
- Enforce style for:
  - headings
  - unordered lists (`- `)
  - ordered lists (`1.`)
  - strong (`**`)
  - emphasis (`_`)
  - fenced code blocks (` ``` `)
  - links:
    - allow shortcut reference links (`[link]`)
    - forbid empty URLs
    - forbid unused link definitions
    - move reference to the end of the file
    - validate relative links
- Enforce 120 character line length
- Validated links

[unreleased]: https://github.com/nstCactus/commitlint-config/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/nstCactus/commitlint-config/releases/tag/v0.1.0
