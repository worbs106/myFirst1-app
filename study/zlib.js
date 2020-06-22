

//파일압축하기
var zlib = require('zlib');
var fs = require("fs");
var gzip = zlib.createGzip();

var date1 = new Date();


var input = fs.createReadStream('zlibExample.html');
var output = fs.createWriteStream('zlibExample.html.gz');

input.pipe(gzip).pipe(output);

 //문자열 압축하기

 console.logs(date1);

 var input = 'hello nodeJS';
 zlib.deflate(input, function(err, buffer) {
   if (!err) {
     console.log("문자열 압축 : ",buffer);
   }
 });
 var str = 'eJzLSM3JyVfIy09J9QoGAB4EBHg='

 var buffer = new Buffer(str, 'base64');
 zlib.inflate(buffer, function(err, buffer) {
   if (!err) {
     console.log("문자열 압축 해제 :",buffer.toString());
   }
 });
