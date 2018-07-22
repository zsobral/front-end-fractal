import React from 'react'
import { Link } from 'react-router-dom'

import './BeerListItem.css'

function BeerListItem ({ beer }) {
  return (
    <li className='beer-list__item'>
      <Link to={`/beers/${beer.id}`}>
        <div className='beer__name'>{beer.name}</div>
        <div className='beer__tag' title={beer.tagline}>{beer.tagline}</div>
      </Link>
    </li>
  )
}

export default BeerListItem
