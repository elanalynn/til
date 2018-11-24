import axios from 'axios'

const api_client = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: { 'Accept': 'application/vnd.til.v1+json' }
})

export default api_client
