import React from 'react';
import './Logo.css'

const Logo = ({url}) => {
  return (
      <div className='Logo'><img
        src={url}
        alt=''
    /></div>
  )
}

export default Logo