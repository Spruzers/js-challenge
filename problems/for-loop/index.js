var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f(8), 40320, 'It is a correct');
    t.equal(f(11), 39916800, 'It is a correct');
    t.equal(f(3), 6, 'It is a correct');
    t.equal(f(0), 1, 'It is a correct');
    t.end();
});
