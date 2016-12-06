// JUGGLING ASYNC (Exercise 9 of 13)

// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
//  command-line arguments.

====================================

const http = require('http'),
    sync = require('async'),
    bl = require('bl');

var arr = process.argv,
    urls = arr.slice(2, arr.length),
    final = [],
    count = 0;

function printResults() {
    for(var i = 0; i < 3; i++) {
        console.log(final[i]);
    }
}

function goGet(index) {
    http.get(urls[0 + index], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) {
                throw err
            }

           final[index] = data.toString('utf8');
           count++

           if(count === 3) {
               printResults();
           }
        }))
    });
};

for(var i = 0; i < 3; i++) {
    goGet(i);
}
