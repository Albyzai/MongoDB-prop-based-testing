import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

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

export const Child = mongoose.model('Child', ChildrenSchema, 'children');