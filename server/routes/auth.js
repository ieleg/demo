const express = require("express")
const sqlFn = require("../mysql")

const router = express.Router();

router.post("/api/users",(req,res) => {
  const {username,password} = req.body;
  const arr = [username,password];
  const sql = "select * from user where `username`=? AND `password`=?";

  sqlFn(sql,arr,function(data){
    if(data.length>0){
      res.json({success:true})
    }else{
      res.status(401)
    }
  })
}) 

module.exports = router;