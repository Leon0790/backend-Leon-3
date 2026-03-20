const router = require('express').Router();

router.post('/signup', (req,res)=>{
  res.json({message:"Signup working"});
});

router.post('/login', (req,res)=>{
  res.json({message:"Login working"});
});

module.exports = router;
