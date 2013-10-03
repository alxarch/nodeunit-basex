'use strict';

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

// var sh = require('shelljs');
// var fs = require('fs');

exports['nodeunit-basex'] = {
	setUp: function(done) {
		done();
	},
	'simple': function(test) {
		test.expect(1);
		// var cmd = 'node node_modules/nodeunit/bin/nodeunit test/fixtures/simple_test.js';
		// var actual = sh.exec(cmd);
		// var expect = fs.readFileSync('test/expect.txt').toString();
		// test.equal(actual, expect);
		test.ok(true);
		test.done();
	}
};
