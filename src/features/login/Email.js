import React from 'react';
import Login from '../../components/Login.js';
import './loginStyles/email.css';
import { IoIosArrowBack } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem'
    }
});

export default function Phone () {
    const classes = useStyles();
    return(
        <div>
            <Login />
            <div className="email-page">
                
                    <div className="arr-back">
                        <Link to='/password'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="email-name">
                    <span><i><h6>Please Enter your</h6></i></span>
                    <h2>Email ID</h2>
                </div>
                <div className="email-input">
                    <TextField
                        type = "email"
                        id="standard-basic" 
                        label="Email"
                        placeholder="john@example.com"
                        required
                        InputProps={{
                            className: classes.input,
                        }}
                        
                    />
                    <div style={{ marginTop:"1rem"}}>
                        <span>We Will never spam you. We promise</span>
                    </div>
                    <div className="check-container">
                        <Link to="/#">
                            <div className="check-circle"> 
                                <BiCheckCircle size="2.5rem" color="white"/>
                                {/* color="light green"  */}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}