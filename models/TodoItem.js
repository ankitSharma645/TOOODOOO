// models/TodoItem.js
const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('TodoItem', todoItemSchema);
