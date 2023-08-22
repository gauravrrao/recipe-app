import { useEffect,useState } from 'react'
import './circle_dish.css'

const Circle_dish = ({name,image}) => {

  return (
    <div className="circle_container">
        <div className="image_wrapper">
            <img src={image} alt="loading" className='dishimage' srcset="" />
            <p className="image_text">{name}</p>
        </div>
    </div>
  )
}

export default Circle_dish