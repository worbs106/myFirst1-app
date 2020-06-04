var zlib = require('zlib');
var fs = require("fs");
var gzip = zlib.createGzip();

var input = fs.createReadStream('zlibExample.html');
var output = fs.createWriteStream('zlibExample.html.gz');

input.pipe(gzip).pipe(output);

 
var input = 'hello nodeJS';
zlib.deflate(input, function(err, buffer) {
  if (!err) {
    console.log(buffer.toString('base64'));
  }
});

var buffer = new Buffer('eJzLSM3JyVfIy09J9QoGAB4EBHg=', 'base64');
zlib.inflate(buffer, function(err, buffer) {
  if (!err) {
    console.log(buffer.toString());
  }
});