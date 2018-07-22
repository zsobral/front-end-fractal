import React from 'react'

import './BeerList.css'
import Button from '../Button'
import Spinner from '../Spinner'
import Overlay from '../Overlay'

function BeerList (props) {
  const {
    loading,
    pagePosition,
    children,
    currentPage,
    onClickPrevPage,
    onClickNextPage,
    ...otherProps
  } = props

  return (
    <div className='beer-list-wrapper'>
      <ul className='beer-list' {...otherProps}>
        {children}
      </ul>
      <div className={`beer-list__page beer-list__page--${pagePosition}`}>
        <Button disabled={currentPage === 1} onClick={onClickPrevPage}><i className='fas fa-angle-left' /></Button>
        <Button onClick={onClickNextPage}><i className='fas fa-angle-right' /></Button>
      </div>
      <Overlay show={loading} />
      <Spinner show={loading} />
    </div>
  )
}

BeerList.defaultProps = {
  pagePosition: 'left'
}

export default BeerList
