import React from 'react'
import './option.css'

const Option = ({name}) => {
  return (
    <div>
        <div className="menuCon">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Option