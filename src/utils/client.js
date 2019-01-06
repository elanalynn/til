import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
  headers: { 'Accept': 'application/vnd.til.v1+json', Authorization: localStorage.getItem('token') }
})

export default client
