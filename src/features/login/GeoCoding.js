import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './loginStyles/geocoding.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { BiSearchAlt } from "react-icons/bi";
import { GiDivert } from 'react-icons/gi';


// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   }));
const useStyles = makeStyles({
    input:{
        margin: "1rem",
        color: "white",
        fontSize: "2rem",
        width: "90%"
    }
})
  

export default function GeoCoding () {
    const classes = useStyles();
    return (
        <div className="geo-location-blue-bg">
            <div className="geo-location-yellow-bg"></div>
            <div className="search-header">
                <div className="geo-loc-arr-back">
                    <Link to="/userlocation">
                        <IoIosArrowBack className="geo-loc-arrow" />
                    </Link>
                </div>
                <div>
                    <TextField
                        id="standard-search"
                        type="search"
                        placeholder="search"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < BiSearchAlt />
                            </InputAdornment>
                        ),
                        className: classes.input
                        }}
                    />
                </div>
            </div>
            <div className="map-display"></div>


            
            <div className="geo-location-page">
                <Link to="/#">
                    <div className="arr-forward">
                        <IoIosArrowForward className=".geo-loc-arrow" color="white"/>
                    </div>
                </Link>                     
            </div>
        </div>
    )
}