var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f(7,5), 2, '6 % 5 = 1');
    t.equal(f(17,9), 8, '1 % 1 = 0');
    // t.equal(f(0.5,0.5), 0.25, '0.5 * 0.5 = 0.25');
    t.end();
});
