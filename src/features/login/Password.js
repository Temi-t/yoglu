import React from 'react';
import './loginStyles/password.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import { useValues } from '../../contexts/RegisterContext';

const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem',
        width: '8rem'
    }
});

export default function Password() {
    const classes = useStyles();
    const [values, setValues] = useValues();
    // const [values, setValues] = React.useState({
    //     password: "",
    //     showPassword: false,
    // });
  
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    
        return (
        
            <div className="blue-bg">
                <div className="yellow-bg"></div>
                <div className="password-page">
                
                    <div className="arr-back">
                        <Link to='/otpInputs'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                    <div className="password-name">
                        <span><i><h6>Let's create a</h6></i> </span>
                        <h2>Password</h2>
                    </div>
                    <div className="password-input">
                            <Input
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                placeholder = "********"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{
                                    className: classes.input,
                                }}
                            
                            /><br />
                            <Input
                                type = {"password"}
                                placeholder="Confirm Password"
                                style={{color: 'white', width: '11.5rem'}}
                            />
                        <div className="check-container">
                            {/* <Link to="/email"> */}
                                <div className="check-circle">
                                    <BiCheckCircle size="2.5rem" color="white" />
                                    {/* color="light green"  */}
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="pw-arr-container">
                    <Link to="/email">
                        <div className="pw-arr-forward">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        )
    
    }

