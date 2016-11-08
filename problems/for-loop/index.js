var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f(9), 362880, 'It should return 362880 for 9 as argument');
    t.equal(f(5), 120, 'It should return 120 for 5 as argument');
    t.equal(f(6), 720, 'It should return 720 for 6 as argument');
    t.end();
});
