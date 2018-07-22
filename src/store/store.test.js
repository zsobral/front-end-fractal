import { take, call, select, put } from 'redux-saga/effects'
import appReducer, {
  changePage,
  loadBeersRequest,
  loadBeersSuccess,
  loadBeersFailure,
  loadBeersSaga,
  watchBeersSaga,
  getPageSize,
  LOAD_BEERS_REQUEST
} from './index'

describe('App Reducer', () => {
  let state

  beforeEach(() => {
    state = {
      beers: [],
      currentPage: 1,
      pageSize: 6,
      fetching: false,
      error: null
    }
  })

  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(state)
  })

  it('should handle the changePage action correctly', () => {
    const expected = {
      ...state,
      currentPage: 2
    }
    expect(appReducer(state, changePage(2))).toEqual(expected)
  })

  it('should handle the action loadBeersRequest correctly', () => {
    const expected = {
      ...state,
      fetching: true
    }
    expect(appReducer(state, loadBeersRequest(1))).toEqual(expected)
  })

  it('should handle action loadBeersSuccess correctly', () => {
    const beersMock = [{ name: 'beer' }]
    const expected = {
      ...state,
      beers: [...beersMock],
      fetching: false,
      currentPage: 1
    }
    expect(appReducer(state, loadBeersSuccess(beersMock, 1))).toEqual(expected)
  })

  it('should handle action loadBeersFailure correctly', () => {
    const errorMock = { message: 'error' }
    const expected = { ...state, error: errorMock, fetching: false }
    expect(appReducer(state, loadBeersFailure(errorMock))).toEqual(expected)
  })
})

describe('App Sagas', () => {
  describe('loadBeersSaga', () => {
    const page = 1
    const saga = loadBeersSaga(page)

    it('should call loadBeersSuccess action if it requests the data successfully', () => {
      const response = { data: [] }
      expect(saga.next().value).toEqual(select(getPageSize))
      saga.next(page)
      expect(saga.next(response).value).toEqual(put(loadBeersSuccess(response.data, page)))
    })

    it('should call loadBeersFailure action if the response errors', () => {
      // TODO
    })
  })

  describe('watchBeersSaga', () => {
    const saga = watchBeersSaga()

    it('should start task to watch for LOAD_BEER_REQUEST action', () => {
      const page = 1
      expect(saga.next().value).toEqual(take(LOAD_BEERS_REQUEST))
      expect(saga.next({ page }).value).toEqual(call(loadBeersSaga, page))
    })
  })
})
