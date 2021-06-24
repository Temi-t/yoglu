import React, { useState, useEffect, createContext, useContext } from 'react';
import {useGeolocation} from "../hooks/useGeolocation";


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
export const useLocDetails = () => useContext(locDetailsContext);

const regSubmitContext = createContext();
export const useHandleRegSubmit = () => useContext(regSubmitContext);

// const validateContext = createContext();
// export const useValidateNow = () => useContext(validateContext);

const userPasswordContext = createContext();
export const useUserPassword = () => useContext(userPasswordContext);

const userNameContext = createContext();
export const useUserName = () => useContext(userNameContext);

const userNumberContext = createContext();
export const useUserNumber = () => useContext(userNumberContext);

const userEmailContext = createContext();
export const useUserEmail = () => useContext(userEmailContext);










//   const validateNow = (currentState) => {
//     // if(!currentState) return
//     const len = currentState.length
//     const stateSetter = `set${currentState[0].toUpperCase()}${currentState.slice(1,len+1)}`
//     stateSetter(!currentState.valid)
//     console.log(stateSetter)
//     }






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
    const [userName, setUserName] = useState({nameInput:'', valid: false});
    const [userNumber, setUserNumber] = useState({phoneNumb:'', valid: false});
    const [userEmail, setUserEmail] = useState({email:'', valid: false});
    const [userPackage, setUserPackage] = useState('');
    const [userPosition, setUserPosition] = useState('');
    const [userDetail, setUserDetail] = useState([]);
    const [userPassword, setUserPassword] = useState('');
    // const [userCoords, setUserCoords] = useState('');

// on password validation, setUserPassword(values.password)-------------------------------------
    // const validate = (currentState) => {
    //     currentState && `set${currentState[0].toUpper()}${currentState[1,currentState.length]}`(!currentState)
    // }
    


    // random number for userID
const rand = () => {
    return Math.floor((Math.random() * 1000000) + 1)
  }
//   details like username, email etc.
  const addDetail = (detail) => {
    const newDetail = {id: rand(), ...detail};
    setUserDetail(prevDetail => [...prevDetail, newDetail])
  }

    let nameInput = userName && userName.nameInput;
    let phone = userNumber && userNumber.phoneNumb;
    let email = userEmail && userEmail.email
  //for submit/finish button
  const handleRegSubmit = async (e) =>{
    e.preventDefault();
    // addDetail func is created above to add each detail
    
    addDetail({
        nameInput, userPassword, userPackage, phone, email, userPosition
    })
  }
  console.log("UserDetails===> ",userDetail)


        //transfer these values of context to children of the provider

    return(
        <valueContext.Provider value={[values, setValues]}>
            <centerContext.Provider value={[center, setCenter]}>
                <selectedLocContext.Provider value={[selectedLocation, setSelectedLocation]}>
                    <locDetailsContext.Provider value={[locDetails, setLocDetails]}>
                        <neighborhoodContext.Provider value={[neighborhood, setNeighborhood]}>
                            <userStateContext.Provider value={[userState, setUserState]}>
                                <countryContext.Provider value={[country, setCountry]}>
                                    <regSubmitContext.Provider value={handleRegSubmit}>
                                        <userPasswordContext.Provider value={[userPassword, setUserPassword]}>
                                            <userNameContext.Provider value={[userName, setUserName]}>
                                                <userNumberContext.Provider value={[userNumber, setUserNumber]}>
                                                    {/* <validateContext.Provider value={validateNow}> */}
                                                    <userEmailContext.Provider value={[userEmail, setUserEmail]}>
                                                        {children}
                                                    </userEmailContext.Provider>
                                                    {/* </validateContext.Provider> */}
                                                </userNumberContext.Provider>
                                            </userNameContext.Provider>
                                        </userPasswordContext.Provider>
                                    </regSubmitContext.Provider>
                                </countryContext.Provider>                     
                            </userStateContext.Provider>
                        </neighborhoodContext.Provider>
                    </locDetailsContext.Provider>
                </selectedLocContext.Provider>
            </centerContext.Provider>
        </valueContext.Provider>
    );
}