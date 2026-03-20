const Student = require('../models/Student');

exports.addStudent = async (req,res)=>{
  try{
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({message:'Student added'});
  }catch(err){
    res.status(400).json({error:err.message});
  }
}

exports.getStudents = async (req,res)=>{
  try{
    const students = await Student.find().sort({createdAt:-1});
    res.json(students);
  }catch(err){
    res.status(500).json({error:err.message});
  }
}
