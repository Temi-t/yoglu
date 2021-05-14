import React from 'react';
import './loginStyles/logo.css';
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Logo () {
    return(
        <div className="blue-bg">
            <div className="yellow-bg"></div>
            <div className="logo-page">
                <div className="arrows">
                    <div className="left-arr">
                        <Link to='/yoglu'>
                            <div className="arr"> 
                                <IoIosArrowBack /> 
                            </div>
                        </Link>
                        <span>Login</span>
                    </div>
                    <div className="right-arr">
                        <span>Register</span>
                        <Link to='/username'>
                            <div className="arr"> 
                                <IoIosArrowForward /> 
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="logo-container">
                    Yoglu 
                    <span className="smart">Smart travel</span>
                </div>
                <div className="lang-container" >
                    <div className="arr-up"> 
                        <div>
                            <IoIosArrowUp color="#FFFF7F" size="2.5rem" />
                        </div> 
                    </div>
                    <div className="select-lang">
                        <span>Select Language</span>
                    </div>
                </div>
            </div>
        </div>
    )
}