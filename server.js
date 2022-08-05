var express = require('express'); //used for routing
var app=express();

var bodyParser=require('body-parser');

app.use(express.static(__dirname+'/www'));

app.use(bodyParser.json());


app.use(express.static(__dirname+'/www'));

app.listen(3000,'127.0.0.1',function(){
    var d= new Date();
    var n= d.getHours();
    var m = d.getMinutes();
    console.log('Server started at : '+n+m);
});



const UserList=require("./www/data.json");
//console.log(UserList);//length 3





app.get('/',function(req,res){
    res.sendFile(__dirname+"/www/form.html");
});

app.post('/api/login',function(req,res){
    if (!req.body){
        return res.sendStatus(400)
    }
    var customer={};
    customer.email=req.body.email;
    customer.upwd=req.body.upwd;
    console.log(req.body.email);
    console.log(req.body.upwd);
    for(let i=0; i<UserList.length; i++){
        //console.log(UserList[i]["email"]);
        if(req.body.email==UserList[i]["email"]){
            console.log(UserList[i]["email"]);
            console.log(UserList[i]["password"]);

            if(req.body.upwd==UserList[i]["password"]){
                console.log(UserList[i]["email"]+"1");
                console.log(UserList[i]["password"]+"1");
                customer.valid=true;
                break;
            }else{
                console.log("pass")
                customer.valid=false;
            }
        }else{
            console.log("pass2")

            customer.valid=false;

        }
    }
    // if(req.body.email=="wonwoo@com.au" && req.body.upwd=="991106"){
    //     customer.valid=true;

    // }else{
    //     customer.valid=false;
    // }
    res.send(customer);
});







//_____________________________________________________________________________________________



// var http=require('http').Server(app);

// let server=http.listen(3000,function(){
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log("My First Nodejs Server!");
//     console.log("Server listening on: "+host+"Port: "+port);

// });

// app.get('/test',function(req,res){
//     res.sendFile(__dirname+'/www/test.html');
// });
// require('./routes/homeroute.js').route(app,path);