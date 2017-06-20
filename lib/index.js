'use strict';
var net = require('net');

module.exports = function(cb) {
    var server = net.createServer();

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
