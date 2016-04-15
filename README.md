# random-index

> Generate a random array-like index.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-index/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-index/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-index)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-index/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-index)


## Install

```
$ npm install --save random-index 
```


## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-index/blob/master/test/spec/index.js)

```js
var randomIndex = require('random-index');

// API:
//   randomIndex(max);
//   // => the result is between `0` and `max`

randomIndex();     // => 0~4294967295           
randomIndex(1);    // => 0~1
randomIndex('10'); // => 0~10   
```

## Related

- [pick-item](https://github.com/mock-end/pick-item) - Randomly sampling a item from an array.
- [pick-items](https://github.com/mock-end/pick-items) - Randomly sampling some items from an array. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-index/issues/new).
