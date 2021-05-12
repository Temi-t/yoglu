import Login from '../../components/Login.js';
import './loginStyles/phone.css';
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
            <div className="phone-page">
                
                    <div className="arr-back">
                        <Link to='/'>
                            <IoIosArrowBack className="arrow" />
                        </Link>
                    </div>
                
                <div className="phone-name">
                    <span>Enter your</span>
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
                    
                    <div className="check-container">
                        <Link to="/Otp">
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
