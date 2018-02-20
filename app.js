var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser"); //for parsing url
var cors = require("cors"); //because angular run on 4200 and node on 300 so for compatibilty
var path = require("path");

//nodemon for continuously watch the changes and stop and run the serverautomatically


var app = express();
//port no
const port = process.env.port || 8080;
const route = require("./routes/route");

//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',function(){
    console.log("connected to db");
});
mongoose.connection.on('error',function(err){
    if(err) {
        console.log('ERROR IS '+err);
    }
});

//middileware
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//testing server
app.use('/api',route);
app.get('/',function(req,res){
    res.send("test");
});

app.listen(port,function(){
    console.log("server started at "+port);
})