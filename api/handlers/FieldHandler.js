const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const FieldModel = require('../model/Field.js')
require('dotenv').config()
mongoose.Promise = Promise;

const mongoString = process.env.MONGO_URI // MongoDB Url

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Field-Type': 'text/plain' },
  body: message || 'Incorrect id',
});

const dbExecute = (db, fn) => db.then(fn).finally(() => db.close());

function dbConnectAndExecute(dbUrl, fn) {
  return dbExecute(mongoose.connect(dbUrl, { useMongoClient: true }), fn)
}

module.exports.getField = (event, context, callback) => {
  dbConnectAndExecute(mongoString, () => (
    FieldModel
      .find()
      .then(field => callback(null, {
        statusCode: 200,
        headers: {
        'Field-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
        body: JSON.stringify(field) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
}
module.exports.getFields = (event, context, callback) => {
  const id = event.pathParameters.id
  dbConnectAndExecute(mongoString, () => (
    FieldModel
      .find({contentID: id})
      .then(field => callback(null, {
        statusCode: 200,
        headers: {
        'Field-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
        body: JSON.stringify(field) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
}
module.exports.createField = (event, context, callback) => {
    const data = JSON.parse(event.body)
    const field = new  FieldModel({
      name: data.field.name,
      contentID: data.field.id,
      value: data.field.value,
    })
    console.log(data)
    dbConnectAndExecute(mongoString, () => (
      field
        .save()
        .then(() => callback(null, {
          statusCode: 200,
          headers: {
          'Field-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
          body: JSON.stringify({ id: field.id }),
        }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.deleteField = (event, context, callback) => {
    if (!validator.isAlphanumeric(event.pathParameters.id)) {
      callback(null, createErrorResponse(400, 'Incorrect id'))
      return
    }

    dbConnectAndExecute(mongoString, () => (
      FieldModel
        .remove({ _id: event.pathParameters.id })
        .then(() => callback(null, {
           statusCode: 200,
           headers: {
           'Field-Type': 'application/json',
           "Access-Control-Allow-Origin" : "*",
           "Access-Control-Allow-Credentials" : true
         },
           body: JSON.stringify('Ok') }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.updateField = (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id


    const field = new FieldModel({
      _id: id,
    })


    dbConnectAndExecute(mongoString, () => (
      FieldModel.findByIdAndUpdate(id, field)
        .then(() => callback(null, {
           statusCode: 200,
           headers: {
           'Field-Type': 'application/json',
           "Access-Control-Allow-Origin" : "*",
           "Access-Control-Allow-Credentials" : true
         },
           body: JSON.stringify('Ok') }))
        .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
    ))
  }
