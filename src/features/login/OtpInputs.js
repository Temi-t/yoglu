import React, {useState} from 'react';
// import Login from '../../components/Login.js';
import './loginStyles/otp.css';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';



const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""))
    
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    
    return(
        <div className="blue-bg">
            {/* <Login /> */}
            <div className="yellow-bg"></div>
            <div className="otp-page">
                
                    <div className="arr-back">
                        <Link to='/phone'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="otp-name">
                    <p><i style={{ color: '#FFFF7F' }}>Verify</i> your phone. Enter the <br />
                        <i style={{ color: '#FFFF7F' }}> OTP </i> sent to your phone within <br />
                        <i style={{ color: '#FFFF7F' }}> 59 </i> seconds
                    </p>
                </div>
                <div className="otp-input" >
                        {
                            otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus = {e => e.target.select()}
                               />
                       );
                        })}
                        </div>
                <div className="otp-arr-container">
                    <Link to="/password">
                        <div className="otp-arr-forward">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default OTPBox;