import React, { useRef, useEffect, useState } from 'react'
import './top_bar.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Option from './Option';
import Circle_dish from './Circle_dish';
import OrderDetail from './OrderDetail';

const Top_bar = () => {

  let [data, setData] = useState([])

  useEffect(() => {

    let getapi = async () => {
      let result = await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/")
      let response = await result.json()
      console.log(response);
      setData(response.dishes)
    }

    getapi()
  }, [])

  let [info, setInfo] = useState([])

  useEffect(() => {

    let getapi = async () => {
      let result = await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/")
      let response = await result.json()
      setInfo(response.popularDishes)
    }

    getapi()
  }, [])

  const menusubconRef = useRef(null);

  const handleMouseWheel = (e) => {

    menusubconRef.current.scrollLeft += e.deltaY;

  };
  const dishsubconRef = useRef(null);

  const dishMouseWheel = (e) => {

    dishsubconRef.current.scrollLeft += e.deltaY;

  };

  let date= new Date()

  return (
    <>
      <div className='mainconsub'>
        <div className="top_container">
          <ArrowBackIosIcon style={{marginLeft:15}}/>
          <p>Select Dishes</p>
        </div>
        <div className='sub_container'>
        </div>
        <div className='sec_box'>
          <div className="sec_con">
            <div className="sec_date">
              <CalendarMonthIcon />
              <p>{date.toDateString()}</p>
            </div>
            <div className="sec_time">
              <AccessAlarmIcon />
              <p>10:30 Pm - 12:30 Pm</p>
            </div>
          </div>
        </div>
        <div className="menusubcon" ref={dishsubconRef} onWheel={dishMouseWheel}>
          <Option name="Italian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
          <Option name="Indian" />
        </div>
        <div className="dishname">
          <p>Popular Dishes</p>
        </div>
        <div className="circle_dish" ref={menusubconRef} onWheel={handleMouseWheel}>
          {
            info.map((val) => {
              return (
                <Circle_dish 
                name={val.name}
                image={val.image}
                />
              )
            })
          }

        </div>
        <div className="recom-menu">
          <p>Recommended </p>
          <button>Menu</button>
        </div>
        <div className="ordermenucon">
          {
            Array.isArray(data) ?
              data.map((val) => (
                <OrderDetail
                  name={val.name}
                  rating={val.rating}
                  description={val.description}
                  image={val.image}
                  equipments={val.equipments}
                />
              )) :
              <p>No data to display.</p>
          }
        </div>

      </div>

    </>
  )
}

export default Top_bar