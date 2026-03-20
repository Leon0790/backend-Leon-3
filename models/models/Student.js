const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  grade: { type: String, enum:['Grade 7','Grade 8','Grade 9'], required:true },
  term: { type: String, required:true },
  name: { type: String, required:true },
  mathematics: { type: Number, default: 0 },
  english: { type: Number, default: 0 },
  kiswahili: { type: Number, default: 0 },
  integratedScience: { type: Number, default: 0 },
  agriculture: { type: Number, default: 0 },
  socialStudies: { type: Number, default: 0 },
  preTechnical: { type: Number, default: 0 },
  religiousStudies: { type: Number, default: 0 },
  creativeArts: { type: Number, default: 0 },
  comment: { type: String, default: "" }
}, { timestamps:true });

module.exports = mongoose.model('Student', studentSchema);
