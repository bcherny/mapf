# mapf [![Build Status](https://img.shields.io/circleci/project/bcherny/mapf.svg?branch=master&style=flat-square)](https://circleci.com/gh/bcherny/mapf) [![NPM](https://img.shields.io/npm/v/mapf.svg?style=flat-square)](https://www.npmjs.com/package/mapf) [![MIT](https://img.shields.io/npm/l/mapf.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> Ergonomic `Promise.all`

## Installation

```sh
npm install mapf --save
```

## Usage

```js
import { mapf } from 'mapf'

const [a, b, c] = await mapf([1, 2, 3], async _ => await foo(_))
```

## Rationale

```js
// before
const [a, b, c] = await Promise.all([1, 2, 3].map(async _ => await foo(_)))

// after
const [a, b, c] = await mapf([1, 2, 3], async _ => await foo(_)))
```

## Tests

```sh
npm test
```

## License

MIT