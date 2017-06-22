var restify = require("restify");

function respond(req,res,next){
    res.send(JSON.stringify(req),JSON.stringify(res));
    // res.send('hello  ' + JSON.stringify(req.params));
    next();
}


var server = restify.createServer();
server.get('/hello/:name',respond);

server.listen(process.env.PORT,function(){
    console.log('%s listening at %s',server.name,server.url);
    
})