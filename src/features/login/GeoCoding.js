import React, { useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './loginStyles/geocoding.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { TextField } from '@material-ui/core';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { BiSearchAlt } from "react-icons/bi";
import { useCenter } from "../../contexts/RegisterContext";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from '../../components/Search';
// import useMapRef from '../../hooks/useMapRef';
import useMapChecker from '../../hooks/useMapChecker';

// import { useSelectedLocation } from "../../contexts/RegisterContext";
// import useGeolocation from "../../hooks/useGeolocation";
// import { mapStyles } from "./loginStyles/mapStyles";
// import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
// import { Combobox, ComboboxInput, ComboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";


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
  

// const libraries = ["places"];
const mapContainerStyle = {
    width: '100%',
    height: '100%'
};
const options = {
    // styles: mapStyles
    // disableDefaultUI: true,
    
}



export default function GeoCoding () {
    const {isLoaded, loadError} = useMapChecker();
    // const mapRef = useMapRef();
    const [center] = useCenter();
    // const [selectedLocation, setSelectedLocation] = useSelectedLocation();
    // const userLocation = useGeolocation();
    // const center = {
    //     lat: userLocation.coordinates.lat,
    //     lng: userLocation.coordinates.lng
    // };
    // const classes = useStyles();
    // const {isLoaded, loadError} = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    //     libraries,
    // });
    const mapRef = useRef();
    const onMapLoad = useCallback((map)=>{
        mapRef.current = map
    }, []);

    if (loadError) return "Error loading maps";
    // if (!isLoaded) return "2Loading Maps...";


    return (
        <div className="geo-coding-blue-bg">
            <div className="geo-coding-yellow-bg"></div>
            <div className="search-header">
                <div className="geo-arr-back">
                    <Link to="/userlocation">
                        <IoIosArrowBack className="geo-arrow" />
                    </Link>
                </div>
                {/* <div>
                    <TextField
                        id="standard-search"
                        type="search"
                        placeholder="search"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"> */}
                                {/* < BiSearchAlt /> */}
                                {/* <Search /> */}
                            {/* </InputAdornment>
                        ),
                        className: classes.input
                        }}
                    />
                </div> */}


                {/* google map library should be loaded before loading useplacesAutocomplete */}
                {window.google && <Search mapRef={mapRef} />}
            </div>
            <div className="map-display">
                <h1>yoglu <span role='img' aria-label="plane">✈</span></h1>
                {
                    !isLoaded ? 
                        <p>Map loading...</p> :
                        (<GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={12}
                            center={center}
                            options={options}
                            onLoad={onMapLoad}
                        >
                            <Marker 
                                position={center}
                                onclick={()=>{}}
                            />

                        </GoogleMap>) 
                }

                {/* <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={12}
                    center={center}
                >

                </GoogleMap> */}
            </div>


            
            <div className="arr-container">
                <Link to="/phone">
                    <div className="arr-forward">
                        <IoIosArrowForward className="arrow"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}