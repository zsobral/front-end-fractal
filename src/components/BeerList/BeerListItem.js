import React from 'react'
import { Link } from 'react-router-dom'

import './BeerListItem.css'

function BeerListItem ({ beer }) {
  return (
    <li className='beer-list__item'>
      <Link to={`/beers/${beer.id}`}>
        <div className='beer-list__item beer__name'>{beer.name}</div>
        <div className='beer-list__item beer__tag' title={beer.tagline}>{beer.tagline}</div>
      </Link>
    </li>
  )
}

export default BeerListItem
