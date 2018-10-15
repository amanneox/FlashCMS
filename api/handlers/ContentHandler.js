const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const ContentModel = require('../model/Content.js')
require('dotenv').config()
mongoose.Promise = Promise;

const mongoString = process.env.MONGO_URI // MongoDB Url

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'text/plain' },
  body: message || 'Incorrect id',
});

const dbExecute = (db, fn) => db.then(fn).finally(() => db.close());

function dbConnectAndExecute(dbUrl, fn) {
  return dbExecute(mongoose.connect(dbUrl, { useMongoClient: true }), fn)
}

module.exports.getContent = (event, context, callback) => {
  dbConnectAndExecute(mongoString, () => (
    ContentModel
      .find()
      .then(content => callback(null, {
        statusCode: 200,
        headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
        body: JSON.stringify(content) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
}

module.exports.createContent = (event, context, callback) => {
    const data = JSON.parse(event.body)
    const content = new  ContentModel({
      name: data.content,
      type: data.type,
    })
    console.log(data)
    dbConnectAndExecute(mongoString, () => (
      content
        .save()
        .then(() => callback(null, {
          statusCode: 200,
          headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
          body: JSON.stringify({ id: content.id }),
        }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.deleteContent = (event, context, callback) => {
    if (!validator.isAlphanumeric(event.pathParameters.id)) {
      callback(null, createErrorResponse(400, 'Incorrect id'))
      return
    }

    dbConnectAndExecute(mongoString, () => (
      ContentModel
        .remove({ _id: event.pathParameters.id })
        .then(() => callback(null, {
           statusCode: 200,
           headers: {
           'Content-Type': 'application/json',
           "Access-Control-Allow-Origin" : "*",
           "Access-Control-Allow-Credentials" : true
         },
           body: JSON.stringify('Ok') }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.updateContent = (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id


    const content = new ContentModel({
      _id: id,
      name: data.name,
      subType: data.subType,
      type: data.type,
    })


    dbConnectAndExecute(mongoString, () => (
      ContentModel.findByIdAndUpdate(id, user)
        .then(() => callback(null, {
           statusCode: 200,
           headers: {
           'Content-Type': 'application/json',
           "Access-Control-Allow-Origin" : "*",
           "Access-Control-Allow-Credentials" : true
         },
           body: JSON.stringify('Ok') }))
        .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
    ))
  }
