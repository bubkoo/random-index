# random-index

> Generate a random array-like index.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-index/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-index/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-index)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-index/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-index)


## Install

```
$ npm install --save random-index 
```


## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/random-index/blob/master/test/spec/index.js)

```js
var randomIndex = require('random-index');

// randomIndex(max);
// the result is between `0` and `max`

randomIndex();     // => 0~4294967295           
randomIndex(1);    // => 0~1
randomIndex('10'); // => 0~10   
```


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/random-index/issues/new).
