
const API_KEY = "AIzaSyC7For6kYtOCQB4bZi-ONLP3naJ4UOXoqY";

export default function usePosition (position) {
    const latLng = position.coords.latitude + ","+ position.coords.longitude;
    const img_url = `https://maps.googleapis.com/maps/api/staticmap?
    center=${latLng}&zoom=14&size=400x300&sensor=false&key=${API_KEY}`
    return img_url
}