import React from 'react';
import './loginStyles/finish-reg.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import useGeolocation from "../../hooks/useGeolocation";
import Map from "./Map";
  

export default function FinishReg () {
    const userLocation = useGeolocation();
    console.log("userLocation: ", userLocation)
   
    return (
        <div className="finish-reg-blue-bg">
            <div className="finish-reg-yellow-bg"></div>
                <div className="finish-reg-arr-back">
                    <Link to="/userlocation">
                        <IoIosArrowBack className="finish-reg-arrow" />
                    </Link>
                </div>
                
            <div className="map-display">
                {/* <p>{
                    userLocation.loaded ? 
                    JSON.stringify(userLocation) : " Authorize geolocation to use current location"
                }</p> */}
                <Map />               
            </div>
            
            
            {/* finish-button */}
        </div>
    )
}