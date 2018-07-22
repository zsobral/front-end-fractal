import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import App from './App'
import reducer, { watchBeersSaga } from './store'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watchBeersSaga)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
