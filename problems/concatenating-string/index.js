var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f('punk'), 'Learning to code is punk', 'It should return \'Learning to code is crazy\' if "crazy"');
    t.equal(f('problem solving'), 'Learning to code is problem solving', 'It should return \'Learning to code is great\' if "great"');
    t.equal(f(), 'Invalid parameters', 'Tested');
    t.end();
});
