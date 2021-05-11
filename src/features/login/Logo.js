import Login from '../../components/Login.js';
import './loginStyles/logo.css';
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Logo () {
    return(
        <div>
            <Login />
            <div className="logo-page">
                <div className="arrows">
                    <div className="left-arr">
                        <Link to='/#'><div className="arr"> <IoIosArrowBack color=""/> </div></Link>
                        <span>Login</span>
                    </div>
                    <div className="right-arr">
                        <span>Register</span>
                        <Link to='/username'><div className="arr"> <IoIosArrowForward color=""/> </div></Link>
                    </div>
                </div>
                <div className="logo-container">
                    Yoglu 
                    <span className="smart">Smart travel</span>
                </div>
                <div className="arr-up"> <div><IoIosArrowUp color="#FFFF7F" size="2.5rem" /></div> </div>
                <div className="select-lang">
                    <span>Select Language</span>
                </div>
            </div>
        </div>
    )
}