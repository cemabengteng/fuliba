require("babel-register");

var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var StreamCherry = require("./module/streamCherry.js");
// var routes = require('./app/routes');
// var Router = require('react-router');

// var mongose = require("mongoose");
// mongose.connect('mongodb://localhost/fuliba');
// mongose.connection.on('open',()=>{
//     console.log('database connection success');
// })
// mongose.connection.on('error',(err)=>{
//     console.log('database start fail' + err);
// })


var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function(req,res){
//   Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
//     if (err) {
//       res.status(500).send(err.message)
//     } else if (redirectLocation) {
//       res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//         // var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
//         // var page = swig.renderFile('views/index.html', { html: html });
//         res.status(200).send('hello man');
//     } else {
//       res.status(404).send('Page Not Found')
//     }
//   });
// });

var data = "<img width=200 height=200 src='https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=3079521078cf3bc7f700caeee101babd/f636afc379310a55e46970e9bf4543a982261059.jpg'></img>"


var imgHtml = require("./components/Img");

app.get('/',function(req,res){
    // StreamCherry.find(function(err,msg){
    //     res.end(JSON.stringify(msg));
    // })   
    res.end(imgHtml);
})

app.listen(process.env.PORT,function(err){
    if(err){
        console.log('err');
    }else{
        console.log('server start success');
    }
}) 