import React from 'react';
import './loginStyles/finishreg.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import {useSelectedLocation, useHandleRegSubmit} from '../../contexts/RegisterContext';
// import ReverseGeoCode from './ReverseGeoCode';
// import useGeolocation from "../../hooks/useGeolocation"



export default function FinishReg () {
    // const currentLocDetails = useLocDetails();
    //  console.log("My Location===> ",currentLocDetails)
    // useReverseGeoCode()
    // const location = useGeolocation();
    const handleRegSubmit = useHandleRegSubmit();
    const [selectedLocation, setSelectedLocation] = useSelectedLocation();
    // setSelectedLocation(currentLocDetails);
    const pStyle={
        color: 'white',
        fontSize: '2rem'
    }
    return(
        <div className="finish-blue-bg">
            <div className="finish-yellow-bg"></div>
            
                <div className="finish-arr-back">
                    <Link to="/userlocation">
                        <IoIosArrowBack className="finish-arrow" />
                    </Link>
                </div>
            
            <div className="finish-page">
                <div className="finish-location">
                    <p>Your</p>
                    <h1>Location :</h1>
                    {/* <ReverseGeoCode/> */}
                </div>
    
               {
                   selectedLocation ?
                (<div className="user-location">
                            <div className=" marker-container">                          
                                < ImLocation />    
                            </div>
                        <div className="selected-location">
                            <span>
                                {selectedLocation } 
                            </span>
                        </div>
                        <div className="x-container" onClick={()=>(setSelectedLocation(''))}>
                            <AiOutlineClose className="x-icon" />
                        </div>                                            
                </div>) : <p style={pStyle}>No selected location</p>
                }
                <form onSubmit={handleRegSubmit}>
                    <button type="submit">Finish</button>
                </form>
            </div>
        </div>
    )
}