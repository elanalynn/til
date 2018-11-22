import axios from 'axios'

const api_client = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: {
    'Authorizaton': 'i dunno....',
    'Accept': 'application/vnd.til.v1+json'
  }
})

export default api_client
