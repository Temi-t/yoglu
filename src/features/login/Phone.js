import React from 'react';
// import Login from '../../components/Login.js';
import './loginStyles/phone.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem',
        width: '90%'
    }
});

export default function Phone () {
    const classes = useStyles();
    return(
        <div className="blue-bg">
            <div className="yellow-bg"></div>
            <div className="phone-page" >
                
                    <div className="arr-back">
                        <Link to='/package'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="phone-name">
                    <span><i><h6>Enter your</h6></i></span>
                    <h2>Phone Number</h2>
                </div>
                <div className="phone-input">
                    <TextField 
                        id="standard-basic" 
                        // label="Phone Number"
                        placeholder="+234"
                        required
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                    
                    <div className="phone-check-container">
                        {/* <Link to="/otpInputs"> */}
                            <div className="check-circle"> 
                                <BiCheckCircle size="2.5rem" color="white"/>
                                {/* color="light green"  */}
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="phone-arr-container">
                    <Link to="/otpInputs">
                        <div className="phone-arr-forward">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
