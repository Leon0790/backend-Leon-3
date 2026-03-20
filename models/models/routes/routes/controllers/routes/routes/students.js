const router = require('express').Router();

router.get('/', (req,res)=>{
  res.json({message:"Students route working"});
});

router.post('/', (req,res)=>{
  res.json({message:"Add student working"});
});

module.exports = router;
