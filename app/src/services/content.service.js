/* eslint-disable */
import { authHeader } from '../helpers'
import axios from 'axios'
const config = {
  apiUrl:'https://11d48we87i.execute-api.ap-south-1.amazonaws.com/dev'
}
export const contentService = {
  getAll,
  getById,
  update,
  delete: _delete,
  create
}
async function getAll () {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
try {
  const res = await axios.get(`${config.apiUrl}/content/list`, requestOptions)
  console.log(res.data)
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
  const res = await axios.get(`${config.apiUrl}/content/get/${id}`, requestOptions)
  console.log(res.data)
  return res.data
} catch (error) {
    return Promise.reject(error)
}
  }

async function update (content) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    content
  }
try {
  const res = await axios.post(`${config.apiUrl}/content/update/${content.id}`, requestOptions)
  console.log(res.data)
} catch (error) {
  return Promise.reject(error)
}
}

async function create (content) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    content
  }
  console.log(content)
try {
  const res = await axios.post(`${config.apiUrl}/content/post/`, requestOptions)
  console.log(res.data)
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
  const res = await axios.get(`${config.apiUrl}/content/delete/${id}`, requestOptions)
} catch (error) {
  return Promise.reject(error)
}

}
