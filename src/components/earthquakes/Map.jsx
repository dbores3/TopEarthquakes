import Spinner from '../Spinner'
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
} from '@react-google-maps/api'
  
function Map({ earthquake }) {
    //Sets the API's key
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries: ['places'],
    })

    //Sets the coordinates
    const center = { lat: earthquake['geometry']['coordinates'][1], lng: earthquake['geometry']['coordinates'][0] }

    //Loader
    if (!isLoaded) {
        return <Spinner />
    }
  
    return (
        <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={{ width: '90%', height: '90%' }}
            options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
        >
            <Marker position={center} />
        </GoogleMap>
    )
}
  
export default Map