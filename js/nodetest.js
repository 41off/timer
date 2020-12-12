var fs = require('fs');
var path = require('path');
var dirPath = process.argv['Replay/Video'];  //directory path
var fileType = '.'+process.argv['.mkv']; //file extension
var files = [];
fs.readdir(dirPath, function(err,list){
    if(err) throw err;
    for(var i=0; i<list.length; i++)
    {
        if(path.extname(list[i])===fileType)
        {
            console.log(list[i]); //print the file
            files.push(list[i]); //store the file name into the array files
        }
    }
});

