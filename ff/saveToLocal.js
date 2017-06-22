// 先把fuliba.net 的内容存在本地

var request = require("request");
var fs = require("fs");

var config = require("./config");


request.get(config.url,function(err,res,body){
    if(err){
        console.log(err);
    }else{
        fs.writeFileSync(config.fileName,body);
        console.log('save success');
    }
})