import { GoogleMap, LoadScript } from '@react-google-maps/api'

const MapContainer = () => {
  const mapStyles = {
    height: '60vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 39.208119627504274,  lng: -98.59515339158469
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4.5}
        center={defaultCenter}
      />
    </LoadScript>
  )
}

export default MapContainer
