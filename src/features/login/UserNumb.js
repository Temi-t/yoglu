// deprecated file
import './loginStyles/userNumb.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import TextField from '@material-ui/core/TextField'; 

export default function UserNumb () {
    return(
        <div className="blue-bg">
            <div className="yellow-bg"></div>
            <Link to="/package">
                <div className="arr-back-container">
                    <div className="arr-back">
                        <IoIosArrowBack className="arrow" />
                    </div>
                </div>
            </Link>
            <div className="phone-page">
                <div className="number-request">
                    <div className="text-container">
                        <p>Enter Your</p>
                        <h1>Phone Number</h1>
                    </div>
                </div>
                <div>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        // shrink: true,
                    }}
                />
                </div>
            </div>
        </div>
    )
}