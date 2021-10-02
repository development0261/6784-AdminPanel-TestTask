import * as axios from 'axios'

const options = {
  baseURL: 'http://localhost:8081/api/',
  headers: {
    Accept: 'application/json',
  },
}

export default axios.create(options)
