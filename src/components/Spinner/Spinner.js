import React from 'react'

import './Spinner.css'

function Spinner (props) {
  return (
    <div className='spinner' style={{ display: props.show ? 'block' : 'none' }}>
      <div className='double-bounce1' />
      <div className='double-bounce2' />
    </div>
  )
}

export default Spinner
