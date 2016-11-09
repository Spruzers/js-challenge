#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('js-challenge');

var problems = [ 'remainder', 'even-odd-NaN', 'for-loop', 'prime-number', 'concatenating-string', 'string-length', 'reverse-string' ];
problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
