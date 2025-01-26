const mongoose = require('mongoose');

const BlockSchema = new mongoose.Schema({
  text: { type: String, required: true },
  showInOption: { type: Boolean },
  isAnswer: { type: Boolean },
});

const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrectAnswer: { type: Boolean },
});

const DataSchema = new mongoose.Schema({
  type: { type: String, required: true },
  anagramType: { type: String },
  blocks: [BlockSchema],
  options: [OptionSchema],
  siblingId: { type: mongoose.Schema.Types.ObjectId },
  solution: { type: String },
  title: { type: String, required: true },
});

const User = mongoose.model('abcs', DataSchema);

module.exports = User;
