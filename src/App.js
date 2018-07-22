import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import './App.css'
import Landing from './components/Landing'
import BeerDetailsPage from './containers/BeerDetailsPage'
import BeerListPage from './containers/BeerListPage'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <div className='app__header'>
            <Header />
          </div>
          <div className='app__body'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/beers' component={BeerListPage} />
              <Route path='/beers/:id' component={BeerDetailsPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
