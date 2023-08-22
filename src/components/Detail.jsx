import './detail.css';
import react,{useEffect,useState} from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';

const Detail = () => {

  let[detdisk,setdetdisk]=useState([])

  useEffect(()=>{
    let getapi=async()=>{
      let result = await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
      let response = await result.json()
      setdetdisk(response);
    }
    getapi()
  },[])


  return (
    <div className='wrapper'>
      <div className='detailpagecon'>
        <div className="headdeatorder">
          <Link to="/">
            <ArrowBackIosIcon style={{ marginLeft: 15, marginTop: 25 }} />
          </Link>
        </div>
        <div className="ordeconfid">
          <div className="orderdivleft">
            <div className="ordernamediv">
              <h3>Mashala Muglai</h3>
              <button className='btnmen'>
                4.2<StarIcon />
              </button>
            </div>
            <div className="detailpara">
              <p>
                Mughlai Masala is a style of cookery developed in the Indian Subcontinent
                by the imperial kitchen of the Mughal Empire
              </p>
            </div>
            <div className="divtime">
              <AccessTimeIcon style={{ marginRight: 5 }} />
              <h3>1 Hour</h3>
            </div>
            <div className="divingre">
              <h3>Ingredients</h3>
              <p>For 2 people</p>
            </div>
            <div className="divvegecon">
              <h3>Vegetables (05) </h3>
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="orderrightdiv">
            <img
              className="orderrightdiv"
              src="/vegetables.jpg"
              alt="loading"
              srcSet=""
            />
          </div>
        </div>
      </div>
      <div className="listing">
        <div className="divping">
          <p>Cauliflower</p>
          <p>Tomato</p>
          <p>Spinach</p>
          <div className="divpinggg">
            <h3 className='spices'>Spices(10)</h3>
            <p>Coriander</p>
            <p>Mustard oil</p>
          </div>
          <h3 className='applianc'>Appliances</h3>
          <div className="appliancesdiv">
    <KitchenIcon style={{fontSize:80}}/>
    <MicrowaveIcon style={{fontSize:80}}/>
    <KitchenIcon style={{fontSize:80}}/>
          </div>
        </div>
        <div className="divpingno">
          <p>01 Pc</p>
          <p>10 Pc</p>
          <p>1/2 Kg</p>
          <div className="divpingnogg">
          <p>100 gram</p>
          <p>1/2 litres</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
