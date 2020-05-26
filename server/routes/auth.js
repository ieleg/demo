const express = require("express")
const sqlFn = require("../mysql")

const router = express.Router();
const jwt = require("jsonwebtoken")
const config = require('../config')

router.post("/api/auth",(req,res) => {
  console.log(123);

  const {username,password} = req.body;
  const arr = [username,password];
  const sql = "select * from user where `username`=? AND `password`=?";

  sqlFn(sql,arr,function(data){
    if(data.length>0){
      //jwt签名
      const token = jwt.sign({
        id:data[0].id,
        username:data[0].username,
        // config是自己生成的一个字符串，用来加密
      },config.jwtSecret)
      res.send(token);
    }else{
      res.status(401).json({err:"账号密码错误"})
    }
  })
}) 

module.exports = router;