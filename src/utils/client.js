import axios from 'axios'
import jwtDecoder from './jwtDecoder'

const token = localStorage.getItem('token')
const id = jwtDecoder(token).user_id

const client = axios.create({
  baseURL: id ? `http://localhost:3000/users/${id}` : 'http://localhost:3000/',
  timeout: 10000,
  headers: { 'Accept': 'application/vnd.til.v1+json', Authorization: token }
})

export default client
