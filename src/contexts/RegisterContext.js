import React, { useState, useEffect, createContext, useContext } from 'react';
import useGeolocation from "../hooks/useGeolocation";

//creating contexts for each state and exporting them
const valueContext = createContext();
export const useValues = () => useContext(valueContext);

const centerContext = createContext();
export const useCenter = () => useContext(centerContext);

const selectedLocContext = createContext();
export const useSelectedLocation = () => useContext(selectedLocContext);

const locDetailsContext = createContext();
export const useLocDetails = () => useContext(locDetailsContext)
//create a provider that will feed all children
export default function RegisterProvider ({children}) {
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
    //users current location
    const userLocation = useGeolocation();
    const [center, setCenter] = useState({});
    //user selected location
    const [selectedLocation, setSelectedLocation] = useState('');
    //location details from reverse geocoding(making use of latlng to get address)
    const [locDetails, setLocDetails] = useState({});

    useEffect(()=>{
        setCenter(
            prevState => ({
                lat: userLocation.coordinates.lat,
                lng: userLocation.coordinates.lng
            })
        )
    }, []);
    return(
        //transfer the value of context to children of the provider
        <valueContext.Provider value={[values, setValues]}>
            <centerContext.Provider value={[center, setCenter]}>
                <selectedLocContext.Provider value={[selectedLocation, setSelectedLocation]}>
                    <locDetailsContext.Provider value={[locDetails, setLocDetails]}>
                        {children}
                    </locDetailsContext.Provider>
                </selectedLocContext.Provider>
            </centerContext.Provider>
        </valueContext.Provider>
    );
}