// HTTP JSON API SERVER (Exercise 13 of 13)

// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.

// For example:

// /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second'
// properties. For example:

// {
// "hour": 14,
// "minute": 23,
// "second": 15
// }

// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time in milliseconds (the number of
// milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
// For example:

// { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to
// your program.

=================================

const http = require("http"),
    url = require('url'),
    arg = process.argv[2];

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    if (req.method == 'GET') {
        var parsed = url.parse(req.url, true);
        var date = {};

        if (parsed.pathname == '/api/parsetime') {
            var time = new Date(parsed.query.iso);
            date.hour = time.getHours();
            date.minute = time.getMinutes();
            date.second = time.getSeconds();
        }

        if (parsed.pathname == '/api/unixtime') {
            var time = new Date(parsed.query.iso);
            date.unixtime = time.getTime();
        }
        var json = JSON.stringify(date);
        res.end(json);
    }
}).listen(arg);
