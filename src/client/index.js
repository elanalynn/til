import axios from 'axios'

const token = localStorage.getItem('token')
const id = localStorage.getItem('id')

const client = axios.create({
  baseURL: id ? `http://localhost:3000/users/${id}` : 'http://localhost:3000/',
  timeout: 10000,
  headers: { 'Accept': 'application/vnd.til.v1+json', Authorization: token }
})

export default client
