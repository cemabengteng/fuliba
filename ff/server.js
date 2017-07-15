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



// var imgHtml = require("./components/Img");

app.get('/',function(req,res){
    res.end('hello man');
})

app.listen('8000',function(err){
    if(err){
        console.log('err');
    }else{
        console.log('server start success');
    }
}) 