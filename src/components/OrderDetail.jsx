import React from 'react'
import './orderdetail.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarIcon from '@mui/icons-material/Star';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import { Link } from 'react-router-dom';

const OrderDetail = ({ name, rating, description, image, equipments }) => {
    return (
        <div className="mescroll">
            <div className='OrderDetail'>
                <div className="ordercon1">
                    <div className="heading">
                        {name}
                        <div className="condot">
                            <CheckBoxOutlineBlankIcon />
                        </div>

                        <button className='btnmen'>{rating}<StarIcon /> </button>
                    </div>
                    <div className="logo">
                        <div className="k1">
                            {equipments.map((val, index) => (
                                <React.Fragment key={index}>
                                    {val === 'Refrigerator' ? <KitchenIcon /> : null}
                                    {val === 'Microwave' ? <MicrowaveIcon /> : null}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="ing">
                            <p>Ingredients</p>
                            <Link to='/detail' className='dishlist'><p >View List</p></Link>
                        </div>
                    </div>
                    <div className="para">
                        {description}
                    </div>
                </div>
                <div className="orderconimg">
                    <img className='vegename' src={image} alt="" srcset="" />
                    <div className='imgbtn-div'>
                        <button className='image-btn'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail