import React from 'react'
import './Icons.css'

const Icons = ({ url }) => {
  return (
    <div className='generalIcon'><img
      src={url}
      alt=''
    /></div>
  )
}

export default Icons