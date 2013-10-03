/*
 * nodeunit-basex
 * https://github.com/alxarch/nodeunit-basex
 *
 * Copyright (c) 2013 Alexandros Sigalas
 * Licensed under the MIT license.
 */

'use strict';

var basex = require('basex-standalone'),
    sprintf = require('util').format,
    path = require('path');

module.exports = function(test, testdir, options) {
    var xql = path.join(__dirname, '/runtests.xql');
    var opt = options || {};
	opt.run = xql;
	opt.bind = opt.bind || {};
	opt.bind.testdir = testdir || process.cwd();

    return basex(opt, function(error, data, stderr){
        if(error){
          console.log(stderr);
          throw error;
        }

        var report = JSON.parse(data),
            total = 0;

        report.forEach(function(t){
          total += t.tests;
        });
        
        test.expect(total * 3);

        report.forEach(function(t){
          t.testcases.forEach(function(c){
            
            test.equal(0, c.skip.length, 
              sprintf("Skipped XQuery unit test: %s > %s\n", t.name, c.name) + 
                c.skip.map(function(s){
                  return s.message;
                }).join('\n'));

            test.equal(0, c.error.length,
              sprintf("XQuery unit test raised an error: %s > %s\n", t.name, c.name) + 
              c.error.map(function(e){
                return sprintf("[%s] %s", e.type, e.message);
              }).join('\n'));
            
            test.equal(0, c.fail.length,
              sprintf("Xquery assertion failed: %s > %s\n", t.name, c.name) +
              c.fail.map(function(f){
                return sprintf("[%s] %s", f.type, f.message);
              }).join('\n'));
          });
        });
      
        test.done();
      });
};
