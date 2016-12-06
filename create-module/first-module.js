var dirpath = process.argv[2],
    type = process.argv[3],
    fm = require('./make-it-modular');

var callback = function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
        console.log(file);
    })
}

fm(dirpath, type, callback);
