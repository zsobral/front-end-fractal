import React from 'react'

import './Overlay.css'

function Overlay (props) {
  return <div className='overlay' style={{ display: props.show ? 'block' : 'none' }} />
}

export default Overlay
