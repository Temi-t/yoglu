import React from 'react';
import './loginStyles/current-location.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {useGeolocation} from "../../hooks/useGeolocation";
import Map from "./Map";
  

export default function CurrentLocation () {
    // useCallback(
    //     () => {
    //         const userLocDetails = useGeolocation()
    //         return userLocDetails
    //     },[]
    // )
    const userLocDetails = useGeolocation();
    console.log("userLocation: ", userLocDetails)
  
   
    return (
        <div className="current-loc-blue-bg">
            <div className="current-loc-yellow-bg"></div>
                <div className="current-loc-page">
                    <div className="current-loc-arr-back">
                        <Link to="/userlocation">
                            <IoIosArrowBack className="current-loc-arrow" />
                        </Link>
                    </div>            
                    <div className="current-map-display">
                        {/* <p>{
                            userLocation.loaded ? 
                            JSON.stringify(userLocation) : " Authorize geolocation to use current location"
                        }</p> */}
                        <Map />               
                    </div>
                    <div className="current-loc-arr-container">
                        <Link to="/finishReg2">
                            <div className="current-loc-arr-forward">
                                <IoIosArrowForward />
                            </div>
                        </Link>
                    </div>
                </div>
        </div>
    )
}