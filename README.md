# remark-lint-preset

A [remark](https://github.com/remarkjs/remark) [preset](https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-presets)
to configure [remark-lint](https://github.com/remarkjs/remark-lint) with
markdown style conventions

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
![node][node-badge]

<!--consumer-badges end -->

### Installation

```sh
npm install remark remark-cli @nstcactus/remark-lint-preset --save-dev
```

### Configure

Add to the project's `.remarkrc.js`:

```js
export default { plugins: ['@nstcactus/remark-lint-preset'] };
```

Add an npm script that will run as part of `npm test`:

```json
    "lint:md": "remark --frail ."
```

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]

<!--contribution-badges end -->

### Dependencies

```sh
npm install
```

### Verification

```sh
npm test
```

[npm-link]: https://www.npmjs.com/package/@nstcactus/remark-lint-preset
[npm-badge]: https://img.shields.io/npm/v/@nstcactus/remark-lint-preset.svg
[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[node-badge]: https://img.shields.io/node/v/@nstcactus/remark-lint-preset?logo=node.js
