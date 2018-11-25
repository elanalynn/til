import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000,
  headers: { 'Accept': 'application/vnd.til.v1+json', Authorization: localStorage.getItem('token') }
})

export default client
