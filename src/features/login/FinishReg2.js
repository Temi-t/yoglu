import React, {useState} from 'react';
import './loginStyles/finishreg2.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
// import { useLocDetails} from '../../contexts/RegisterContext';
import ReverseGeoCode from './ReverseGeoCode';
// import {useGeolocation} from '../../hooks/useGeolocation';
// import { useNeighborhood, useUserState, useCountry} from '../../contexts/RegisterContext';





export default function FinishReg () {
    // const [ setNeighborhood] = useNeighborhood();
    // const [ setUserState] = useUserState();
    

    
    // const reverse = ReverseGeoCode();
    // const [neighborhood, setNeighborhood, userState, setUserState, country, setCountry] = reverse;

    // const [ country, setCountry] = useCountry();
    const [clear, setClear] = useState(false);


    // const currentLocDetails = useLocDetails();
    //  console.log("My Location===> ",currentLocDetails)
    // console.log(neighborhood, userState, country)
    const pStyle={
        color: 'white',
        fontSize: '2rem',
        display: clear? '': 'none'
    }
    return(
        <div className="finish-blue-bg">
            <div className="finish-yellow-bg"></div>
            
                <div className="finish-arr-back">
                    <Link to="/userlocation">
                        <IoIosArrowBack className="finish-arrow" />
                    </Link>
                </div>
            
            
            <div >
            {/* {country ? */}
                <div className="finish-page" >
                    <div className="finish-location">
                        <p>Your</p>
                        <h1>Location :</h1>
                    </div>
                    {
                        !clear ?
                        // country ?
                        (<div className="user-location" >
                                    <div className=" marker-container">                          
                                        < ImLocation />    
                                    </div>
                                <div className="selected-location">
                                    <span>
                                        <ReverseGeoCode/>
                                        {/* {neighborhood}, {userState}, {country} */}

                                    </span>
                                </div>
                                <div className="x-container" 
                                    onClick={()=>setClear(!clear)}
                                    // onClick={()=>setCountry('')}
                                >
                                    <AiOutlineClose className="x-icon" />
                                </div>                                            
                        </div>) : <p style={pStyle}>No selected location</p>
                    }
                </div>
                {/* : <span>...</span>     */}
            {/* } */}
            </div>
        </div>
    )
}