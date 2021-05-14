import React from 'react';
import Login from '../../components/Login.js';
import './loginStyles/otp.css';
import { IoIosArrowBack } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import OtpInput from "react-otp-input";




export default function OtpInputs() {
    
    return(
        <div>
            <Login />
            <div className="otp-page">
                
                    <div className="arr-back">
                        <Link to='/phone'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="otp-name">
                    <p><i style={{ color: 'yellow' }}>Verify</i> your phone. Enter the <br />
                        <i style={{ color: 'yellow' }}> OTP </i> sent to your phone within <br />
                        <i style={{ color: 'yellow' }}> 59 </i> seconds
                    </p>
                </div>
                <div className="otp-input" id="otp">
                   <OtpInput
                        onChange={otp => console.log(otp)}
                        numInputs={4}
                        separator={<span>-</span>}
                        
                    />
                    <div className="check-container">
                        <Link to="/password">
                            <div className="check-circle"> 
                                <BiCheckCircle size="2.5rem" color="white"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}