import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Header.css'
import Button from '../Button'

function Header (props) {
  function renderBackButton () {
    if (props.history.location.pathname === '/') {
      return null
    } else {
      return (
        <Button onClick={() => props.history.goBack()} flat rounded>
          <i className='fas fa-arrow-left' />
        </Button>
      )
    }
  }

  return (
    <div className='header'>
      { renderBackButton() }
      <Link to='/'>
        <h1>App</h1>
      </Link>
    </div>
  )
}

export default withRouter(Header)
