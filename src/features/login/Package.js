// import Login from '../../components/Login.js'
import React from 'react';
import './loginStyles/package.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiPineapple, GiSlicedBread } from "react-icons/gi";
import {  FcPhoneAndroid } from "react-icons/fc";
import { CgFileDocument } from "react-icons/cg";
import {  GiTravelDress } from "react-icons/gi";
import { GoHome } from "react-icons/go";




// const packages = [
//     GiPineapple, GiSlicedBread, FcSmartphoneTablet,
//     FcPhoneAndroid, IoDocumentsOutline, CgFileDocument,
//     GiAmpleDress, GiTravelDress, FcHome,GoHome, GiPalette
// ]

export default function Package () {
    return(
        <div className="blue-bg">
            <div className="yellow-bg"></div>
            <div className="package-page">
                
                    <div className="arr-back">
                        <Link to="/username">
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="shipping-query">
                    <p>Hello $John, 
                    what type of packages 
                    do you often ship?</p>
                </div>
                <section className="all-packages-grid">
                    <div className="package-container">
                        <div className="package-circle">
                            < GiPineapple size="3rem" color="rgba(38, 38, 38, 0.8)" />
                        </div>
                        <span>Farm Produce</span>
                    </div>
                    <div className="package-container">
                        <div className="package-circle">
                            < GiSlicedBread  size="3rem"  color="rgba(38, 38, 38, 0.8)" />
                        </div>
                        <span>Processed Food</span>
                    </div>
                    <div className="package-container">
                        <div className="package-circle">
                            < FcPhoneAndroid size="3rem"  color="rgba(38, 38, 38, 0.8)" />
                        </div>
                        <span>Consumer Electronics</span>
                    </div>
                    <div className="package-container">
                        <div className="package-circle">
                            < CgFileDocument size="3rem"  color="rgba(38, 38, 38, 0.8)" />
                        </div>
                        <span>Documents</span>
                    </div>
                    <div className="package-container">
                        <div className="package-circle">
                            < GiTravelDress size="3rem"  color="rgba(38, 38, 38, 0.8)" />
                        </div>
                        <span>Fashion & beauty</span>
                    </div>
                    
                    <div className="package-container">
                        <div className="package-circle">
                            < GoHome size="3rem"  color="rgba(38, 38, 38, 0.8)" />
                        </div>
                        <span>Home & Art</span>
                    </div>
                </section>

                <div className="pkg-arr-container">
                    <Link to="/phone">
                        <div className="pkg-arr-forward">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}