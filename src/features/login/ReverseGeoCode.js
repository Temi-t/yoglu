import React,{useEffect, useState} from 'react';
import useGeolocation from '../../hooks/useGeolocation';
import {useLocDetails} from '../../contexts/RegisterContext';


export default function ReverseGeoCode  ()  {
    // const [selectedLocation, setSelectedLocation] = useSelectedLocation();
    const geoLoc = useGeolocation();
    const [data, setData] = useState();
    const [locDetails, setLocDetails] = useLocDetails();
    const lat = geoLoc.coordinates.lat;
    const lng = geoLoc.coordinates.lng;
    console.log('geoLoc: ', geoLoc)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
    
        //fetching from google
    //  useEffect(()=>{
    //     const fetchData = async()=>{
    //         const res =await fetch(url)
    //         const jsonResponse = await res.json()
    //         console.log('Effect: ', jsonResponse)
    //         setData(jsonResponse);
    //             data.results[0].address_components.map((item, i)=>{
    //                return item.types.includes("country")? 
    //                setLocDetails(prev => ({
    //                    ...prev,
    //                  country: item.long_name
    //                 })) : 
    //                null;
    //             })
    //     }
    //     fetchData();
    // },[])
    



    useEffect(()=>{
        const fetchData = () =>{
            fetch(url)
            .then(response =>{
                if(response.ok){
                    return response.json()
                }
                throw new Error('Request failed!')
            }, networkError =>{
                console.log(networkError.message)
            })
            .then(jsonResponse => {
                setData(jsonResponse);
                console.log('Data===> ',data)
                data.results[0].address_components.map((item, i)=>{
                    return item.types.includes("state")? 
                    setLocDetails(prev => ({
                        ...prev,
                      country: item.long_name
                     })) : null;
                 })

                data.results[0].address_components.map((item, i)=>{
                   return item.types.includes("country")? 
                   setLocDetails(prev => ({
                       ...prev,
                     country: item.long_name
                    })) : null;
                })

                
            })
            .catch(err => console.warn(err.message));
        }
        fetchData ()
    },[locDetails]);

    return(
        <p>{locDetails.state ,locDetails.country}</p>
    )
  }


// var geocoding = new require('reverse-geocoding');

// export default function useReverseGeoCode(){
//     const geoLoc = useGeolocation();
//     var config = {
//         'lat': geoLoc.coordinates.lat,
//         'lng': geoLoc.coordinates.lng
//     };
//     const reverseData = geocoding(config, function(err, data){
//         if(err){
//             console.log(err);
//         }else{
//             console.log('DATA===> ',data);
//         }
//     });
//     return 
// }







// dataPart.map(part =>{
                    // country inside dataPart array[x]
                    // if(part.types.includes("country")){
                        // console.log('HERE: ', dataPart.long_name)
                        // setLocDetails({
                        //     country: dataPart.long_name
                        // })
                        // return locDetails
                    // }
                // });