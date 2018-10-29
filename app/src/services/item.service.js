/* eslint-disable */
import { authHeader } from '../helpers'
import axios from 'axios'
const config = {
  apiUrl:'https://11d48we87i.execute-api.ap-south-1.amazonaws.com/dev'
}
export const itemService = {
  get_All,
  getById,
  update,
  createItem,
  getItems,
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
//  console.log(Object.assign({}, item.data))
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
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
  }
try {
  const res = await axios.get(`${config.apiUrl}/item/delete/${id}`, requestOptions)
} catch (error) {
  return Promise.reject(error)
}

}
