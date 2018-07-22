import * as api from './index'

describe('api', () => {
  it('should return an array of beers', async () => {
    const response = await api.getBeers(1, 10)
    expect(response.data).toHaveLength(10)
  })

  it('should return an array with one beer', async () => {
    const response = await api.getBeerById(1)
    expect(response.data).toHaveLength(1)
  })
})
