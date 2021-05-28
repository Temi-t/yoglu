import React from 'react';
import './loginStyles/userlocation.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export default function UserLocation () {
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
                    <h1>Location ?</h1>
                </div>
                <div className="geo-location">
                    <Link to="/currentLocation">
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
                            <span>Pick another location</span>
                        </div>
                        <Link to="/geocoding">
                            <div className="geocode-arr-forward">
                                <IoIosArrowForward className="arrow"/>
                            </div>
                        </Link>                     
                </div>
            </div>
        </div>
    )
}