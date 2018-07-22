import React from 'react'

import './Button.css'

function Button (props) {
  const { children, flat, rounded, ...otherProps } = props

  const classNames = [
    'button'
  ]

  if (flat) {
    classNames.push('button--flat')
  }

  if (rounded) {
    classNames.push('button--rounded')
  }

  return <button className={classNames.join(' ')} {...otherProps}>{children}</button>
}

export default Button
