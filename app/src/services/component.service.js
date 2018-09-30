/* eslint-disable */
import { authHeader } from '../helpers'
import axios from 'axios'
const config = {
  apiUrl:'https://58nx6q13rc.execute-api.ap-south-1.amazonaws.com/dev'
}
export const componentService = {
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
  const res = await axios.get(`${config.apiUrl}/component/`, requestOptions)
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
  const res = await axios.get(`${config.apiUrl}/component/get/${id}`, requestOptions)
  console.log(res.data)
  return res.data
} catch (error) {
    return Promise.reject(error)
}
  }

async function update (component) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    component
  }
try {
  const res = await axios.post(`${config.apiUrl}/component/update/${component.id}`, requestOptions)
  console.log(res.data)
} catch (error) {
  return Promise.reject(error)
}
}

async function create (component) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
    component
  }
try {
  const res = await axios.post(`${config.apiUrl}/component/create/`, requestOptions)
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
  const res = await axios.get(`${config.apiUrl}/component/delete/${id}`, requestOptions)
} catch (error) {
  return Promise.reject(error)
}

}
