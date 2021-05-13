import Login from '../../components/Login.js';
import './loginStyles/password.css';
import { IoIosArrowBack } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


export default function Password() {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
  
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
        
            <div>
                <Login />
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
                                placeholder = "***********"
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
                            
                            /><br />
                            <Input
                                type = {"password"}
                                placeholder="Confirm Password"
                            />
                        <div className="check-container">
                            <Link to="/email">
                                <div className="check-circle">
                                    <BiCheckCircle size="2.5rem" color="white" />
                                    {/* color="light green"  */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }

