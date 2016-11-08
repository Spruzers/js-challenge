var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f(3), 'Odd', '3 is an odd number');
    t.equal(f('scale'), 'Not a number', 'This is not a number');
    t.equal(f(true), 'Not a number', 'Not a number');
    t.equal(f(6), 'Even', '6 is an even number');
    t.end();
});
