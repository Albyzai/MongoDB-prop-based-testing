const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const ChildrenSchema = new Schema({
  name: {
      type: String
  },
  age: {
      type: Number
  },
  date: {
      type: Date
  }
});

module.exports = Child = mongoose.model('Child', ChildrenSchema, 'children');