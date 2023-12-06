import React from 'react';
import './Icon.css'

const Icon = ({ url }) => {
    return (
        <div className='Icon_component'><img
            src={url}
            alt=''
        /></div>
    )
}

export default Icon