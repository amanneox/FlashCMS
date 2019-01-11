/* eslint-disable */
import { authHeader } from '../helpers'
import axios from 'axios'
import uuidv1 from 'uuid/v1'
const config = {
  apiUrl:'https://11d48we87i.execute-api.ap-south-1.amazonaws.com/dev'
}

import aws from 'aws-sdk'
import  awsConfig from 'aws-config'
aws.config.region = 'us-east-1'; // Region
aws.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:678be9df-5be5-4931-80a8-551db0ad75c5',
})
const s3 = new aws.S3()

export const itemService = {
  get_All,
  getById,
  update,
  createItem,
  getItems,
  _delete,
  uploadImage
}

async function uploadImage(item) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
  try {
        const url =  'https://s3-ap-south-1.amazonaws.com/flash-cms-photos/'
        const filename = uuidv1() + '.png'
        const params = {
            Bucket: 'flash-cms-photos',
            Key: filename,
            ContentType: item.type,
            Body: item,
            ACL: 'public-read'
        }
        const res = await s3.putObject(params).promise()
        return url+filename

  } catch (error) {
    return Promise.reject(error)
  }

}

async function get_All () {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
try {
  const res = await axios.get(`${config.apiUrl}/item/list`)
  return res.data
} catch (error) {
    return Promise.reject(error)
}
  }

async function getById (id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
try {
  const res = await axios.get(`${config.apiUrl}/item/get/${id}`)

  return res.data
} catch (error) {
    return Promise.reject(error)
}
  }

async function update (item) {

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    item:Object.assign({}, item.data)
  }
try {
  const res = await axios.post(`${config.apiUrl}/item/put/${item.id}`, requestOptions)

} catch (error) {
  return Promise.reject(error)
}
}

async function createItem (item) {
  console.log(item)
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    item:Object.assign({}, item.data)
  }
try {
 const res = await axios.post(`${config.apiUrl}/item/post/${item.id}`, requestOptions)

  } catch (error) {
  return Promise.reject(error)
 }
}
async function getItems(item) {

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
  try {
    const res = await axios.get(`${config.apiUrl}/item/get/${item}`)

    return res.data
    } catch (error) {
    return Promise.reject(error)
   }
}
async function _delete (id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
try {
  const res = await axios.get(`${config.apiUrl}/item/delete/${id}`)
} catch (error) {
  return Promise.reject(error)
}

}
