import { call, take, put, select } from 'redux-saga/effects'

import * as api from '../api'

const LOAD_BEERS_REQUEST = 'LOAD_BEERS_REQUEST'
const LOAD_BEERS_SUCCESS = 'LOAD_BEERS_SUCCESS'
const LOAD_BEERS_FAILURE = 'LOAD_BEERS_FAILURE'

const CHANGE_PAGE = 'CHANGE_PAGE'

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

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function * loadBeersSaga (page) {
  try {
    const pageSize = yield select(state => state.pageSize)
    const response = yield api.getBeers(page, pageSize)
    // yield delay(2000)
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
