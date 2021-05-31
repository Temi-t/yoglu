import React, {useCallback} from 'react';
import { useSelectedLocation, useCenter } from '../contexts/RegisterContext';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { BiSearchAlt } from "react-icons/bi";



export default function Search({mapRef}){
    const [ center, setCenter] = useCenter();
    const [selectedLocation, setSelectedLocation] = useSelectedLocation();
    const {ready, value, 
        suggestions: { status, data},
         setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: ()=> selectedLocation.lat,
                lng: ()=> selectedLocation.lng
            },
            radius: 200*1000,
        }
    })
    const boxInputStyle = {
        height: '2rem',
        width: '70%',
        border: 'none',
        marginLeft: '1.5em',
        borderBottom: '1px solid white',
        background: 'transparent',
        color: '#fff',
        fontSize: '2rem',
        outline: 'none'
    }
    const popoverStyle = {
        background: '#1E4072',
        fontSize: '1.5rem',
        color: 'white',
        zIndex: '3'
    }
    const searchIcon ={
        color: 'white',
        fontSize: '1rem',
        opacity: '0.5'
    }
    const panTo = useCallback(({lat, lng})=>{
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(12);
    }, []);

    const handleAddress = async(address) =>{
        // shouldFetchData? Boolean from usePlacesAutocomplete
        setValue(address, false);
        clearSuggestions();
        setSelectedLocation(address);
            // selectedLocation.pickedLocation: address
        try{
            const results = await getGeocode({address});
            const {lat, lng} = await getLatLng(results[0]);
            panTo({lat, lng});
            setCenter({lat,lng});
        } catch(err){
            console.log(err)
        }
    }
    return(
        <div className="search">
            {/* <BiSearchAlt style={searchIcon} /> */}
            <Combobox 
                onSelect={handleAddress}
            >
                
                <ComboboxInput 
                    value={value} 
                    onChange={(e)=>{setValue(e.target.value)}}
                    disabled={!ready}
                    style={boxInputStyle}
                    placeholder= "Search"
                />
                <BiSearchAlt style={searchIcon} />
                <ComboboxPopover 
                    style={popoverStyle}
                >
                    {/* <ComboboxList> */}
                    {/* suggestions from google places */}
                    {
                        status === "OK" && 
                            data.map((item,i)=> (
                                <ComboboxOption key={"item_"+ i} value={item.description} />
                            ) )
                    }
                    {/* </ComboboxList> */}
                </ComboboxPopover>

            </Combobox>
        </div>
    )
}