import React from 'react';
import './loginStyles/userlocation.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
// import { TiLocationOutline } from "react-icons/ti";
import { ImLocation } from "react-icons/im";
// import useGeolocation from "../../hooks/useGeolocation"

export default function UserLocation () {
    // const location = useGeolocation();
    return(
        <div className="user-location-blue-bg">
            <div className="user-location-yellow-bg"></div>
            
                <div className="location-arr-back">
                    <Link to="/email">
                        <IoIosArrowBack className="location-arrow" />
                    </Link>
                </div>
            
            <div className="user-location-page">
                <div className="location-query">
                    <p><i>What</i> is your</p>
                    {/* <span>Location ?</span> */}
                    <h1>Location ?</h1>
                </div>
                <div className="geo-location">
                    <Link to="/finishReg">
                        <div className=" round-container">
                            < MdGpsFixed />
                        </div>
                    </Link>
                    <div className="my-location">
                        <p>Use my current location</p>
                        <h1>Turn on GPS</h1>
                    </div>
                </div>
                <div className="geo-coding">
                        <Link to="/geocoding">
                            <div className=" round-container">                          
                                < ImLocation />    
                            </div>
                        </Link>
                        <div className="pick-location">
                            <span>Pick a location</span>
                        </div>
                        <Link to="/geocoding">
                            <div className="arr-forward">
                                <IoIosArrowForward className="arrow"/>
                            </div>
                        </Link> 
                        
                        
                    {/* <div className="pick-find-location"> </div> */}
                    
                </div>
            </div>
        </div>
    )
}