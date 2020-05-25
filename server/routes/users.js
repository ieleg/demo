const express = require('express');

const router = express.Router();
//使用一个中间件验证
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const sqlFn = require("../mysql")

const validatorInput = (data) => {
  let errors = {};
  if(validator.isEmpty(data.username)){
    errors.username = "请填写用户名"
  }
  if(validator.isEmpty(data.email)){
    errors.email = "请填邮箱"
  }
  if(validator.isEmpty(data.password)){
    errors.password = "请填密码"
  }
  if(validator.isEmpty(data.passwordR)){
    errors.passwordR = "请确认密码"
  }
  if(!validator.equals(data.password,data.passwordR)){
    errors.passwordR = "两次密码不相同"
  }
  return{
    errors,
    isValid:isEmpty(errors)
  }
  
}
router.post("/api/users",(req,res) => {
  
  // console.log(req.body); 
  const  {errors,isValid} = validatorInput(req.body);
  var sql = "INSERT INTO user VALUES (null,?,?,?,?)"
  const arr = [req.body.username,req.body.email,req.body.password,req.body.passwordR]

  if(isValid){
    sqlFn(sql,arr,function(data){
      if(data.affectedRows){
        res.send({success:true})
      }else{
        res.status(400).json({error:"注册失败"});

      }
    })

  }else{
    res.status(400).json(errors);
  }

})

module.exports = router;