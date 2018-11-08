const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const ItemModel = require('../model/Item.js')
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

module.exports.getItem= (event, context, callback) => {
  dbConnectAndExecute(mongoString, () => (
    ItemModel
      .find()
      .then(item=> callback(null, { statusCode: 200,
        headers: {
        'Field-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify(item) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
}

module.exports.createItem= (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id

    const item= new  ItemModel({
      data:data.item,
      contentID: id
    })

    dbConnectAndExecute(mongoString, () => (
      item
        .save()
        .then(() => callback(null, {
          statusCode: 200,
          headers: {
          'Field-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
          body: JSON.stringify({ id: item.id }),
        }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.deleteItem= (event, context, callback) => {
    if (!validator.isAlphanumeric(event.pathParameters.id)) {
      callback(null, createErrorResponse(400, 'Incorrect id'))
      return
    }

    dbConnectAndExecute(mongoString, () => (
      ItemModel
        .remove({ _id: event.pathParameters.id })
        .then(() => callback(null, { statusCode: 200,
          headers: {
          'Field-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        body: JSON.stringify('Ok') }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }
  module.exports.getItems = (event, context, callback) => {
    const id = event.pathParameters.id
    dbConnectAndExecute(mongoString, () => (
      ItemModel
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
  module.exports.updateItem= (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id

    const item= new ItemModel({
      _id:id,
      data:data.item,
    })


    dbConnectAndExecute(mongoString, () => (
      ItemModel.findByIdAndUpdate(id, item)
        .then(() => callback(null, { statusCode: 200,
          headers: {
          'Field-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
         body: JSON.stringify('Ok') }))
        .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
    ))
  }
