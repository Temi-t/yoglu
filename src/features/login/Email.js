import React, {useState} from 'react';
import './loginStyles/email.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useUserEmail } from '../../contexts/RegisterContext';


const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem',
        width: "90%"
    }
});

export default function Phone () {
    const [emailOk, setEmailOk] = useState(false);
    const [userEmail, setUserEmail] = useUserEmail();
    const classes = useStyles();
    const userCheck = () => {
        setEmailOk(prev => !prev)
    }
    return(
        <div className="blue-bg">
            {/* <Login /> */}
            <div className="yellow-bg"></div>
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
                        onChange={(e)=>setUserEmail({
                            ...userEmail,
                            email: e.target.value
                        })}
                        placeholder="john@example.com"
                        required
                        InputProps={{
                            className: classes.input,
                        }}
                        
                    />
                    <div style={{ marginTop:"1rem"}}>
                        <span>We will never spam you. We promise</span>
                        {/* <small>We Will never spam you. We promise</small> */}
                    </div>
                    <div className="check-container">
                            <div className="email-check-circle"
                                onClick={userCheck}
                                style={{backgroundColor: `${ emailOk ? "#ffff7f": "grey"}`}}
                            > 
                                <BiCheckCircle size="2.5rem" color={emailOk ? "#00b33c" : "#fff"}/>
                            </div>
                    </div>
                </div>
                <div className="email-arr-container">
                    <Link to="/userlocation">
                        <div className="email-arr-forward">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}