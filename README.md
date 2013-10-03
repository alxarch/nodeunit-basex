# nodeunit-basex [![Build Status](https://secure.travis-ci.org/alxarch/nodeunit-basex.png?branch=master)](http://travis-ci.org/alxarch/nodeunit-basex)

Run BaseX unit tests in nodeunit.

## Getting Started
Install the module with: `npm install nodeunit-basex`

Run all *[.-_]test.xqm modules inside a testdir:
```javascript
var bxunit = require('nodeunit-basex');

exports['my-xquery-tests'] = function(test){
	bxunit(test, 'path/to/xquery/tests/');
};
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Alexandros Sigalas. Licensed under the MIT license.
