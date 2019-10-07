import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL
})

export const fetchItemById = (id) => {
  return client.get(`/${id}`)
}

export const searchItems = (query) => {
  return client.get(`?q=${encodeURIComponent(query)}`)
}
