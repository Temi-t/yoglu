import React, { useRef, useCallback } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import './loginStyles/geocoding.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCenter } from "../../contexts/RegisterContext";
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import Search from '../../components/Search';
import useMapChecker from '../../hooks/useMapChecker';

  

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
    const [center] = useCenter();
    
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

                {/* google map library should be loaded before loading useplacesAutocomplete */}
                {window.google && <Search mapRef={mapRef} />}
            </div>
            <div className="map-display">
                <h1>yoglu <span role='img' aria-label="plane">✈</span></h1>
                {
                    !isLoaded ? 
                        <p style={{padding: '5rem'}}>Map loading...</p> :
                        (<GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={12}
                            center={center}
                            options={options}
                            onLoad={onMapLoad}
                        >
                            { center &&
                                <Marker 
                                    position={center}
                                    onclick={()=>{}}
                                />
                            }

                        </GoogleMap>) 
                }
            </div>
            
            <div className="arr-container">
                <Link to="/finishReg">
                    <div className="arr-forward">
                        <IoIosArrowForward className="arrow"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}