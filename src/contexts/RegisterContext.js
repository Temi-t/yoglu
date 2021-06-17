import React, { useState, useEffect, createContext, useContext } from 'react';
import {useGeolocation} from "../hooks/useGeolocation";
import {Auth} from "aws-amplify";


//creating contexts for each state and exporting them
const valueContext = createContext();
export const useValues = () => useContext(valueContext);

const centerContext = createContext();
export const useCenter = () => useContext(centerContext);

const neighborhoodContext = createContext();
export const useNeighborhood = () => useContext(neighborhoodContext);

const userStateContext = createContext();
export const useUserState = () => useContext(userStateContext);

const countryContext = createContext();
export const useCountry = () => useContext(countryContext);


const selectedLocContext = createContext();
export const useSelectedLocation = () => useContext(selectedLocContext);

const locDetailsContext = createContext();
export const useLocDetails = () => useContext(locDetailsContext)

const submitContext = createContext();
export const useHandleSubmit = () => useContext(submitContext);








//random number for userID
const rand = () => {
    return Math.floor((Math.random() * 1000000) + 1)
  }
  //details like username, email etc.
  const addDetail = (detail) => {
    const newDetail = {id:rand(), ...detail};
    setUserDetail(prevDetail => [...prevDetail, newDetail])
    console.log(userDetail)
  }

  //for submit/finish button
  const handleSubmit = (e) =>{
    e.preventDefault();
    //addDetail func is created above to add each detail
    addDetail({
        userName, userPassword, userPackage, userPhone, userEmail, userPosition
    })
    let response = await Auth.signIn(userDetail.userEmail, userDetail.userPassword);
    console.log('Auth response ==> ', response)
    setUserName('');
    setUserPhone('');
    setUserEmail('');
    
  }






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

    const [neighborhood, setNeighborhood] = useState('');
    const [userState, setUserState] = useState('');
    const [country, setCountry] = useState('');
    useEffect(()=>{
        setCenter(
            prevState => ({
                lat: userLocation.coordinates.lat,
                lng: userLocation.coordinates.lng
            })
        )
    }, []);

    //user data input
    const [userName, setUserName] = useState('');
    const [userPackage, setUserPackage] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPosition, setUserPosition] = useState('');
    const [userDetail, setUserDetail] = useState([]);
    const [userPassword, setUserPassword] = useState('');
    // const [userCoords, setUserCoords] = useState('');

// on password validation, setUserPassword(values.password)-------------------------------------
    const validate = (currentState) => {
        currentState && `set${currentState[0].toUpper()}${currentState[1,currentState.length]}`(!currentState)
    }



    return(
        //transfer these values of context to children of the provider
        <valueContext.Provider value={[values, setValues]}>
            <centerContext.Provider value={[center, setCenter]}>
                <selectedLocContext.Provider value={[selectedLocation, setSelectedLocation]}>
                    <locDetailsContext.Provider value={[locDetails, setLocDetails]}>
                        <neighborhoodContext.Provider value={[neighborhood, setNeighborhood]}>
                            <userStateContext.Provider value={[userState, setUserState]}>
                                <countryContext.Provider value={[country, setCountry]}>
                                    <submitContext.Provider value={handleSubmit}>
                                        {children}
                                    </submitContext.Provider>
                                </countryContext.Provider>                     
                            </userStateContext.Provider>
                        </neighborhoodContext.Provider>
                    </locDetailsContext.Provider>
                </selectedLocContext.Provider>
            </centerContext.Provider>
        </valueContext.Provider>
    );
}