import { call, take, put, select } from 'redux-saga/effects'

import * as api from './api'

export const LOAD_BEERS_REQUEST = 'LOAD_BEERS_REQUEST'
export const LOAD_BEERS_SUCCESS = 'LOAD_BEERS_SUCCESS'
export const LOAD_BEERS_FAILURE = 'LOAD_BEERS_FAILURE'

export const CHANGE_PAGE = 'CHANGE_PAGE'

const initialState = {
  beers: [],
  currentPage: 1,
  pageSize: 6,
  fetching: false,
  error: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_BEERS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case LOAD_BEERS_SUCCESS:
      return {
        ...state,
        beers: [...state.beers, ...action.beers],
        currentPage: action.page,
        fetching: false
      }
    case LOAD_BEERS_FAILURE:
      return {
        ...state,
        error: action.error,
        fetching: false
      }
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}

export function changePage (page) {
  return { type: CHANGE_PAGE, page }
}

export function loadBeersRequest (page) {
  return { type: LOAD_BEERS_REQUEST, page }
}

export function loadBeersSuccess (beers, page) {
  return { type: LOAD_BEERS_SUCCESS, beers, page }
}

export function loadBeersFailure (error) {
  return { type: LOAD_BEERS_FAILURE, error }
}

export const getPageSize = state => state.pageSize

export function * loadBeersSaga (page) {
  try {
    const pageSize = yield select(getPageSize)
    const response = yield api.getBeers(page, pageSize)
    yield put(loadBeersSuccess(response.data, page))
  } catch (error) {
    yield put(loadBeersFailure(error))
  }
}

export function * watchBeersSaga () {
  while (true) {
    const { page } = yield take(LOAD_BEERS_REQUEST)
    yield call(loadBeersSaga, page)
  }
}
