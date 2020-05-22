const express = require('express');
const app = express();
const users = require('./routes/users');
var debug = require('debug')('my-application'); // debug模块

app.use("/api/users",users);

app.listen(3030,(req,res) => {
  console.log("server is running at 3030");
})