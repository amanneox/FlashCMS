const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const model = mongoose.model('Item', {
  name: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: false
  },
  contentID: {
    type:Schema.ObjectId,
    required: true
  },
  data:{

  },
  created_at:{
    type: Date,
    default: Date.now
  }

})

module.exports = model;
