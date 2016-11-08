var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f('crazy'), 'Learning to code is crazy', 'It should return \'Learning to code is crazy\' if "crazy"');
    t.equal(f('great'), 'Learning to code is great', 'It should return \'Learning to code is great\' if "great"');
    t.equal(f('1'), 'Learning to code is 1', 'It should return \'Learning to code is 1\' if "1"');
    t.end();
});
