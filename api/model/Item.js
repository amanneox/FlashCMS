const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const model = mongoose.model('Item', {
  data: [{
  
  }],
  contentID: {
    type:Schema.ObjectId,
    required: true
  },
  created_at:{
    type: Date,
    default: Date.now
  }

})

module.exports = model;
