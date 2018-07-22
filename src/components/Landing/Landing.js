import React from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'
import Button from '../Button'

function Landing () {
  return (
    <div className='landing'>
      <i className='fas fa-long-arrow-alt-down fa-4x' />
      <Button>
        <Link to='beers'>Beers</Link>
      </Button>
    </div>
  )
}

export default Landing
