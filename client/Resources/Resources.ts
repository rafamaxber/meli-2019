import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL
})

export function fetchItemById(id) {
  return client.get(`/${id}`)
}

export function searchItems(query) {
  return client.get(`?q=${encodeURIComponent(query)}`)
}
