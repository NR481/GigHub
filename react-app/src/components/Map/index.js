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
      googleMapsApiKey='AIzaSyAxA5IYnszZY16lmaNs_fjpzgY1P4fLfSY'
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
