import React from 'react';
import './loginStyles/userlocation.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
// import { TiLocationOutline } from "react-icons/ti";
import { ImLocation } from "react-icons/im";

export default function UserLocation () {
    return(
        <div className="user-location-blue-bg">
            <div className="user-location-yellow-bg"></div>
            
            {/* <div className="arr-back-container"> */}
                <div className="location-arr-back">
                    <Link to="/email">
                        <IoIosArrowBack className="location-arrow" />
                    </Link>
                </div>
            {/* </div> */}
            
            <div className="user-location-page">
                <div className="location-query">
                    <p><i>What</i> is your</p>
                    {/* <span>Location ?</span> */}
                    <h1>Location ?</h1>
                </div>
                <div className="geo-location">
                    <div className="use-gps-icon round-container">
                        < MdGpsFixed />
                    </div>
                    <div className="my-location">
                        <p>Use my current location</p>
                        <h1>Turn on GPS</h1>
                    </div>
                </div>
                <div className="geo-coding">
                        <div className="find-location-icon round-container">
                            {/* < TiLocationOutline /> */}
                            < ImLocation />
                        </div>
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