import React from 'react'
import { hot } from 'react-hot-loader'

import Hello from './components/Hello'

class App extends React.Component {
  render () {
    return <Hello />
  }
}

export default hot(module)(App)
