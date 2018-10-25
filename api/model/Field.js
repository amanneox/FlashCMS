const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const model = mongoose.model('Field', {
  name: {
    type: String,
    required: true
  },
  contentID: {
    type:Schema.ObjectId,
    required: true
  },
  value:{
    type: String,
    required: true
  },
  created_at:{
    type: Date,
    default: Date.now
  }

})

module.exports = model;
