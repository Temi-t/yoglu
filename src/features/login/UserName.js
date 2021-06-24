import React, {useState} from 'react';
import './loginStyles/username.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useUserName} from "../../contexts/RegisterContext";


const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem',
        width: '90%'
    }
});

export default function UserName () {
    const classes = useStyles();
    const [userName, setUserName] = useUserName();
    const [userNameOk, setUserNameOk] = useState(false);
    const validate = (e) => {
        setUserNameOk(prev => !prev)
    }
    console.log('username ', userName)

    return(
        <div className="blue-bg">
            {/* <Login /> */}
            <div className="yellow-bg"></div>
            <div className="username-page">
                
                    <div className="arr-back">
                        <Link to='/yoglu'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="username-name">
                    <span>Let's begin with your</span>
                    <h1>Name</h1>
                </div>
                <div className="username-input">
                    <TextField 
                        id="standard-basic" 
                        label="Name"
                        placeholder="John Doe"
                        onChange={(e)=> setUserName({
                            ...userName, nameInput: e.target.value
                        })}
                        required
                        InputProps={{
                            className: classes.input,
                        }}
                    />

                    {/* <div className="check-container">
                        <Link to="/package">
                            <div className="check-circle"> 
                                <BiCheckCircle size="2.5rem" color="white"/>
                            </div>
                        </Link>
                    </div> */}
                    <div className="username-check-container">
                        <div className="username-check-circle" 
                            onClick={validate}
                            style={{backgroundColor: `${ userNameOk ? "#ffff7f": "grey"}`}}
                        >
                            
                            <BiCheckCircle size="2.5rem" color={userNameOk ? "#00b33c" : "#fff"} />
                        </div>
                    </div>
                    
                </div>
                <div className="username-arr-container">
                    <Link to="/package">
                        <div className="username-arr-forward">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// const nameChecker =()=>{
//     if(userName !== ""){
//         make checker green
//         navigate to the next page
//     }
// }