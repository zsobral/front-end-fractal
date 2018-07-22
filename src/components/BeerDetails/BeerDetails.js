import React from 'react'

import './BeerDetails.css'

function BeerDetails (props) {
  function renderBeerDetails () {
    if (props.beer) {
      return (
        <React.Fragment>
          <div className='beer__name'>
            {props.beer.name}
          </div>
          <div className='beer__tag'>
            {props.beer.tagline}
          </div>
          <div className='beer__img'>
            <img src={props.beer.image_url} />
          </div>
          <p className='beer__details'>
            {props.beer.description}
          </p>
        </React.Fragment>
      )
    } else {
      return <h2>Beer Not Found</h2>
    }
  }

  return (
    <div className='beer'>
      {renderBeerDetails()}
    </div>
  )
}

export default BeerDetails
