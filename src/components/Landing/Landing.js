import React from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'
import Button from '../Button'

function Landing () {
  return (
    <div className='landing'>
      <i className='fas fa-long-arrow-alt-down fa-4x' />

      <Link to='beers'>
        <Button>Beers</Button>
      </Link>

    </div>
  )
}

export default Landing
