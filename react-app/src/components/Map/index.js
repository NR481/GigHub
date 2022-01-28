import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MapContainer = ({ profiles }) => {
  const coordinatesObj = useSelector(state => state.maps)

  const [selected, setSelected] = useState({})

  const onSelect = item => {
    setSelected(item)
  }

  const mapStyles = {
    height: '60vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 39.208119627504274,  lng: -98.59515339158469
  }

  const coordinates = Object.values(coordinatesObj)

  const name = profiles?.find(profile => +profile.id === +selected?.id)

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4}
        center={defaultCenter}
      >
        {coordinates?.map(item => (
          <Marker
            key={item.id}
            position={item.coordinate}
            onClick={() => onSelect(item)}
          />
        ))}
        {selected?.coordinate && (
          <InfoWindow
            position={selected.coordinate}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <Link to={`/profiles/${name?.id}`}>{name?.name}</Link>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer
