const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=3000;
const app=express();
app.use(bodyParser.json())
app.use(cors());
app.get('/',function(req,res){
  res.send(`
    <head>
    <meta charset="utf-8">
    <title>Express Server</title>
    <style>
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background: #1a1919;
            text-align:center;
            color: #fff;
            font-size:50px;
        }
    </style>
    </head>
    <body>
    <div class="container"><h1>Hello World!</h1></div>
    </body>

    `);
})
app.post('/enroll',function(req,res)
{
  console.log(req.body);
  res.status(200).send({"message":"data received"});
})
app.listen(port,function(){
  console.log('Express Server Listening on port:'+port);
})
var startChrome = require("start-chrome");
startChrome("http://localhost:3000");
