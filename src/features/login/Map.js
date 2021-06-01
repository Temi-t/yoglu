import React, { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import {useGeolocation} from "../../hooks/useGeolocation";
import './loginStyles/map.css';
const containerStyle = {
    width: '100vw',
    height: '400px'
};


function Map() {
    const userLocation = useGeolocation();
    const center = {
        lat: userLocation.coordinates.lat,
        lng: userLocation.coordinates.lng
    };
    
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [ map, setMap] = useState(null);
    const [myLocation, setMyLocation] = useState(null);

    const onLoad = useCallback(function callback(map){
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
        // console.log('Map details: ',map)
    },[])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    const infoDivStyle = {
        background: '#1E4072',
        border: '2px solid pink',
        padding: 15,
        fontSize: '1.5rem'
    }

    return (
        <div>
            {
                isLoaded ? (
                <div>
                     <h1 className="logo">yoglu 
                        <span role='img' aria-label="plane">✈</span>
                    </h1>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        // heading={1}
                    >
                
                        <Marker 
                            position={{
                                lat: center.lat,
                                lng: center.lng
                            }}
                            onClick={()=> setMyLocation(center)}  
                        />   

                        {
                            myLocation && (
                                <InfoWindow
                                    position={{
                                        lat: myLocation.lat,
                                        lng: myLocation.lng
                                    }} 
                                    onCloseClick={()=>
                                        setMyLocation(null)
                                    }                  
                                >
                                    <div style={infoDivStyle}>
                                        <span role='img' aria-label='search guide'>🕵🏻</span>
                                        You seem to be around here
                                    </div>
                                   
                                </InfoWindow>
                            )
                        } 
                        
                            {/* <marker 
                            {...center ? (
                                <InfoWindow
                                    position={center}                   
                                >
                                    <div style={infoDivStyle}>🕵🏻You seem to be around here</div>
                                </InfoWindow>
                            )  : null}
                            /> */}  
                    </GoogleMap>
                    </div>) : 
                    <p style={{paddingLeft: "5rem", color: "white", fontSize: '2rem'}}>Map Loading...</p>
               }
        </div>
    )


}

export default memo(Map);


















// function Map () {
//     return (
//         <GoogleMap 
//             defaultZoom={10} 
//             defaultCenter={{lat: 12, lng: 12}}
//         >

//         </GoogleMap>
//     );
// }
// const WrappedMap = withScriptjs(withGoogleMap(Map));

// export default WrappedMap;