import axios from 'axios'

const token = localStorage.getItem('token')
const id = localStorage.getItem('id')

const client = axios.create({
  baseURL: `http://localhost:3000/users/${id}`,
  timeout: 10000,
  headers: { 'Accept': 'application/vnd.til.v1+json', Authorization: token }
})

export default client
