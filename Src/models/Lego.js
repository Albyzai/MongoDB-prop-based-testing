const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const LegoSchema = new Schema({
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

module.exports = Lego = mongoose.model('Lego', LegoSchema, 'legos');