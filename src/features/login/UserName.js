// import Login from '../../components/Login.js';
import React from 'react';
import './loginStyles/username.css';
import { IoIosArrowBack } from "react-icons/io";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const UserInput = styled(TextField)({
//     color: "white",
//     fontSize: 40,
//     background: "pink"
// });

const useStyles = makeStyles({
    input: {
        color: 'white',
        fontSize: '2rem',
        width: '90%'
    }
});

export default function UserName () {
    const classes = useStyles();
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
                        required
                        InputProps={{
                            className: classes.input,
                        }}
                    />

                    <div className="check-container">
                        <Link to="/package">
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

// const nameChecker =()=>{
//     if(userName !== ""){
//         make checker green
//         navigate to the next page
//     }
// }