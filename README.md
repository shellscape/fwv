[tests]: 	https://img.shields.io/circleci/project/github/shellscape/fwv.svg
[tests-url]: https://circleci.com/gh/shellscape/fwv

[cover]: https://codecov.io/gh/shellscape/fwv/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/shellscape/fwv

[size]: https://packagephobia.now.sh/badge?p=fwv
[size-url]: https://packagephobia.now.sh/result?p=fwv

# fwv

[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![size][size]][size-url]

A Fixed Width Value Parser.

This module is mostly useful to folks who have to parse
[fixed-width format files](https://goo.gl/gGFdtw). Fixed-width files are often
created from database reports or from Microsoft Excel. However, this module can
also be used to quickly parse a string containing data at specified locations.

_Note: This module requires Node v8.11.0 or higher._

## Install

Using npm:

```console
$ npm install fwv
```

Using yarn:

```console
$ yarn add fwv
```

## Usage

```js
const fwv = require('fwv');

const options = {
  columns: [
    { name: 'id', from: 0, to: 4 },
    { name: 'name', from: 5, to: 11 },
    { name: 'cost', from: 12, to: 16 }
  ],
  input: '0001 WIDGET 5.00'
}

const result = await fwv(options);

//→ [ { id: '0001', name: 'WIDGET', cost: '5.00' }]
```

## API

### fwv([options])

Returns: `Array[object]`

#### options

Type: `object`

##### columns

Type: `Array[object]`

An array of column configurations. Each item in the array will correspond to a
property on the result for a given line.

```js
  {
    name: <string>,  // the name of the column / result object property
    from: <integer>, // the start position of the column
    to: <integer>    // the end position of the column
  }
```

_Note: For an example column configuration, see
[test/fixtures/config.js](test/fixtures/config.js)._

##### input

Type: `string|Buffer|Stream`

An input value, upon which the parser will run.

Passing a readable `Stream` is preferred, but you may pass a `string` or
`Buffer`, and the module will convert it to a `Stream` for you.

## Meta

[CONTRIBUTING](./.github/CONTRIBUTING)

[LICENSE (MIT)](./LICENSE)
