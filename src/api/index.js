import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})

export const getBeers = (page, pageSize) => {
  return request.get('/beers', { params: { page, per_page: pageSize } })
}

export const getBeerById = (id) => {
  return request.get(`/beers/${id}`)
}
