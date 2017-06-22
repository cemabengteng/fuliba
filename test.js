const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('localhost/test');
mongoose.connection.on('open',()=>{
    console.log('connection success');
})
mongoose.connection.on('error',()=>{
    console.log('connection error');
})

const PersonSchedule = mongoose.Schema({
    name: String,
    age: Number,
    sex: String
});

const Person = mongoose.model('person',PersonSchedule);


app.get('/',(req,res)=>{
    res.end(Math.random() + '');
    return;
    
    
    if(req.query){
        Person.findOne({age:18},(err,msg)=>{
            res.end(JSON.stringify(msg));
        })
        return;
    }
    
    
    var p = new Person({
        name: 'rose',
        age: 18,
        sex: 'woman'
    });
    
    p.save(()=>{
        res.end('save success');
    })
})

app.listen(process.env.PORT,()=>{
    console.log('server start success ' + process.env.PORT);
})
