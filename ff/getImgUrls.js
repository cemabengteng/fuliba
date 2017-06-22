//<video id="mgvideo" class="video-js vjs-default-skin vjs-big-play-centered" width="100%" height="100%" crossorigin="anonymous" poster="https://content.fruithosted.net/splash/ldbnlpkpebesennf/ttlsbcqmrbkafppk.jpg" controls>
// 找到图片的地址了，去更新图片的地址

var mongoose = require("mongoose");
var StreamCherry = require("./module/streamCherry.js");
var request = require("request");
var cheerio = require("cheerio");

mongoose.connect('mongodb://localhost/fuliba');
mongoose.connection.on('error',(err)=>{
    console.log('database connection err ' + err);
})
mongoose.connection.on('open',()=>{
  console.log('database connection success');  
})


// StreamCherry.findOne({key:'ldbnlpkpebesennf'},(err,msg)=>{
//     if(err){
//         console.log(err);
//     }else{
//         request.get(msg.url,(err,res,body)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             var $ = cheerio.load(body);
//             var imgUrl = $('#mgvideo').attr('poster');
//             console.log(imgUrl);
//             StreamCherry.update(msg,{'imgUrl':imgUrl},function(err,result){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(result);
//                 }
//             });
//         })
        
//     }
// })

StreamCherry.find(function(err,msg){
    if(err){
        console.log('StreamCherry find err' + err);
    }else{
        msg.forEach(function(ele){
            var url = ele.url;
            console.log(url);
                console.log('正在请求 ' + url);
                request.get(url,(err,res,body)=>{
                    if(err){
                        console.log('request url err' + err);
                    }else{
                        var $ = cheerio.load(body);
                        var imgUrl = $('#mgvideo').attr('poster');
                        StreamCherry.update(ele,{'imgUrl': imgUrl},(err,result)=>{
                            if(err){
                                console.log('insert imgurl err' + err);
                            }else{
                                console.log(result);
                            }
                        })
                    }
                })
        })
    }
})