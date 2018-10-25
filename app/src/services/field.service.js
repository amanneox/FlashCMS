/* eslint-disable */
import { authHeader } from '../helpers'
import axios from 'axios'
const config = {
  apiUrl:'https://11d48we87i.execute-api.ap-south-1.amazonaws.com/dev'
}
export const fieldService = {
  get_All,
  getById,
  update,
  createField,
  getFields,
  delete: _delete,
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
  const res = await axios.get(`${config.apiUrl}/field/list`)
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
  const res = await axios.get(`${config.apiUrl}/field/get/${id}`)
  console.log(res.data)
  return res.data
} catch (error) {
    return Promise.reject(error)
}
  }

async function update (field) {
  console.log(field)
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    field
  }
try {
  const res = await axios.post(`${config.apiUrl}/field/put/${field.id}`, requestOptions)
  console.log(res.data)
} catch (error) {
  return Promise.reject(error)
}
}

async function createField (field) {
  console.log(field)
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    field
  }
try {
  const res = await axios.post(`${config.apiUrl}/field/post/`, requestOptions)
  console.log(res.data)
  } catch (error) {
  return Promise.reject(error)
 }
}
async function getFields(field) {
  console.log(field)
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
  try {
    const res = await axios.get(`${config.apiUrl}/field/get/${field}`)
    console.log(res.data)
    return res.data
    } catch (error) {
    return Promise.reject(error)
   }
}
async function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
try {
  const res = await axios.get(`${config.apiUrl}/field/delete/${id}`, requestOptions)
} catch (error) {
  return Promise.reject(error)
}

}
