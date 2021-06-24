import React, {useState} from 'react';
// import Login from '../../components/Login.js';
import './loginStyles/phone.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useUserNumber } from '../../contexts/RegisterContext';


const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem',
        width: '90%'
    }
});

export default function Phone () {
    const [numberOk, setNumberOk] = useState(false);
    const [userNumber, setUserNumber] = useUserNumber();
    const classes = useStyles();
    const userCheck = () => {
        setNumberOk(prev => !prev)
    }
    console.log("userNumber: ", userNumber)
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
                        placeholder="+234"
                        required
                        onChange={(e)=> setUserNumber({
                            ...userNumber,
                            phoneNumb: e.target.value
                        })}
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                    
                    <div className="phone-check-container">
                            <div className="phone-check-circle"
                                onClick={userCheck}
                                style={{backgroundColor: `${ numberOk ? "#ffff7f": "grey"}`}}
                            > 
                                <BiCheckCircle size="2.5rem" color={numberOk ? "#00b33c" : "#fff"}/>
                            </div>
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
