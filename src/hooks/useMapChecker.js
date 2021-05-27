import {useLoadScript} from '@react-google-maps/api';



const libraries = ["places"];
export default function useMapChecker(){
    const mapCheck = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries,
    });
    return mapCheck
}