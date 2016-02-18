'use strict';
var net = require('net');
var server = net.createServer();

module.exports = function(cb) {
    server.listen(0, function(err) {
        if (err) {
            return cb(err);
        }

        var port = server.address().port;

        server.once('close', function() {
            return cb(null, port);
        });
        server.close();
    });
};
