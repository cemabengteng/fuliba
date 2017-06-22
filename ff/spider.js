//抓取fuliba.net 的所有的秘密钥钥匙

var cheerio = require("cheerio");
var fs = require("fs");

var config = require("./config");

var fulibaHtml = fs.readFileSync(config.fileName);

var $ = cheerio.load(fulibaHtml.toString());

var resource = $('p','#commentText-80509').text();

var arr = resource.split(' ');


//去除其中的杂项
var arrays = arr.filter((elemet)=>{
    if(elemet){
        if(elemet.length == 16){
            return true;
        }    
    }
    return false;
})

//存到数据库里面去  key url imgUrl
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fuliba');
mongoose.connection.on('open',function(){
    console.log('database connection success');
})


var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
var StreamCherry = new Schema({
    key       : String,
    url       : String,
    imgUrl    : String,
    date      : Date
});

var StreamCherryData = mongoose.model('fuliba',StreamCherry);

var StreamCherryData = require("./streamCherry.js");

arrays.forEach(function(elemet){
    
    var data = new StreamCherryData({
        key: elemet,
        url: 'https://streamcherry.com/f/' + elemet,
        imgUrl: '',
        date: Date.now()
    })
    
    data.save((err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(elemet + ' save success');
    })
    
})
