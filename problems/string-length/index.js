var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f("Hello!"), 6, 'Passed');
    t.equal(f("AWorld!"), 7, 'Passed');
    t.equal(f(), 'Invalid parameter passed', 'Passed');
    t.equal(f({}), undefined, 'Passed');
    t.equal(f([]), 0, 'Passed');
    t.equal(f("Hello Wor!"), 10, 'Passed');
    t.end();
});
