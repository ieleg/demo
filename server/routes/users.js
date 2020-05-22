const express = require('express');

const router = express.Router();

router.get("/",(req,res) => {
  res.send({
    msg:"12345asdasdasdasdaasd"
  })
})

module.exports = router;