import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

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

export const Lego = mongoose.model('Lego', LegoSchema, 'legos');