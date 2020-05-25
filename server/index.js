const express = require("express");
const app = express();
const users = require("./routes/users")
const debug = require("debug")("my-application");
const bodyParser = require("body-parser")
const auth = require("./routes/auth")


app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})

app.use(bodyParser.json());
app.use("/",users);
app.use("/",auth);


app.listen(3030,(req,res) =>{
    debug("服务器运行在3030端口上");
})