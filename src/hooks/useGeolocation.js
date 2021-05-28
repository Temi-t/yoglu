import { useState, useEffect } from 'react';

export default function useGeolocation () {
    const [userLocation, setUserLocation] = useState({
        loaded: false,
        coordinates: { lat: 0, lng: 0 }
    });
    const onSuccess = (location) =>{
        setUserLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            accuracy: location.coords.accuracy,
            time: location.coords.timestamp,
        });
    }
    const onError = (error) =>{
        setUserLocation({
            loaded: true,
            error: error.message
        });
        // console.log(error)
    }
    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geoloaction not supported",
            });
        }

        navigator.geolocation.getCurrentPosition( onSuccess, onError)
    }, []);
    return userLocation
}