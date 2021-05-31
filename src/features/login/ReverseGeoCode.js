import React,{useEffect, useState} from 'react';
import AbortController from 'abort-controller';
// import { useNeighborhood, useUserState, useCountry} from '../../contexts/RegisterContext';
import {useGeolocation} from '../../hooks/useGeolocation';


export default function ReverseGeoCode  ()  {
    const geoLoc = useGeolocation();
    const lat = geoLoc.coordinates.lat;
    const lng = geoLoc.coordinates.lng;
    console.log('geoLoc: ', geoLoc)
    
    // const [data, setData] = useState(null);

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
    
   
    const [neighborhood, setNeighborhood] = useState('');
    const [userState, setUserState] = useState('');
    const [country, setCountry] = useState('');

    
        //****************** Async 1 fetching from google
    //  useEffect(()=>{
    //     const fetchData = async()=>{
    //         const res =await fetch(url)
    //         const jsonResponse = await res.json()
    //         setData(jsonResponse.results[0].address_components);
    //             console.log('APIdata: ', data)
    //         return data
    //     }
    //     fetchData();
        

    //      data.map((item, i)=>{
    //          item.types.includes("neighborhood")? 
    //         setNeighborhood(item.long_name) : 
    //         null;
    //      })

    //      data.map((item, i)=>{
    //         return item.types.includes("administrative_area_level_1")? 
    //         setUserState(item.long_name) : 
    //         null;
    //      })

    //      data.map((item, i)=>{
    //         return item.types.includes("country")? 
    //         setCountry(item.long_name) : 
    //         null;
    //      })
    //     // console.log("country is : ", country)
    //     return ()=> console.log("clean up")
    // },)
    
//****************** Async 2 fetching from google

    // useEffect(()=>{
    //     async function fetchData(){
    //         const response = await axios.get(url);
    //         setData(response.results[0].address_components)
    //         return response
    //     }
    //     fetchData()
    //     console.log("DATA==> ",data)
    // }, );


//****************** PROMISE fetching 
    useEffect(()=>{
        const abortCont = new AbortController();
        const signal = abortCont.signal;
    //   setTimeout(()=>{
        const fetchData = () =>{
            fetch(url, signal )
                .then(response =>{
                    if(response.ok){
                        return response.json()
                    }
                    throw response
                    // throw new Error('Request failed!')
                }, networkError =>{
                    console.log(networkError.message)
                 })
                 .then(jsResp=>{ 
                    const vrr= jsResp;
                    console.log('xvarrrx: ', vrr)

                    vrr.results[0].address_components.map((item)=>{
                        return item.types.includes("neighborhood")? 
                        setNeighborhood(item.long_name) : null;
                     })
                     console.log("neighborhood: ", neighborhood);

                     vrr.results[0].address_components.map((item)=>{
                        return item.types.includes("administrative_area_level_1")? 
                        setUserState(item.long_name) : null;
                     })
                     console.log("administrative_area_level_1: ", userState)

                     vrr.results[0].address_components.map((item)=>{
                        return item.types.includes("country")? 
                        setCountry(item.long_name) : null;
                     })
                     console.log("country ", country)
                })

                .catch(err => {
                    if(err.name === "AbortError"){
                        console.log('***fetch aborted')
                    } else { console.warn(err.message) }
                });

                

               
                    

        }
        fetchData()

    //   }, 3000)
      

      return () => console.log('cleanUp')
        // return () => abortCont.abort();
    },);


    return (
        <div style={{ color: 'white'}}>
            <span>{neighborhood} </span>
            <span>{userState} </span>
            <span>{country}</span>
        </div>
    )
  }
