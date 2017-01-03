var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f("Hellol"), 'lolleH', 'It should return "olleH" for "Hello"');
    t.equal(f("Wrldo!"), '!odlrW', 'It should return "!dlroW" for "World!"');
    t.equal(f("Hello oWrldo!"), '!odlrWo olleH', 'It should return "!dlroW olleH" for "Hello World!"');
    t.end();
});
