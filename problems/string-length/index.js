var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f("Hello"), 5, 'It should return 5 for "Hello"');
    t.equal(f("World!"), 6, 'It should return 6 for "World!"');
    t.equal(f("Hello World!"), 12, 'It should return 12 for "Hello World!"');
    t.end();
});
