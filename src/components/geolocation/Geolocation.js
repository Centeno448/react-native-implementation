import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import MapView, { Marker } from 'react-native-maps'

const GeolocationScreen = () => {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
  }

  getLocation()

  const { height, width } = Dimensions.get('window');

  return (
    <>
      <MapView
        style={{ height, width }}
        initialRegion={{
          latitude: -0.16924030945500612,
          longitude: -78.47092322469005,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -0.13391289241014917, longitude: -78.47819135624158 }}
          title='Casa de Jordan'
          description='Aquí fue donde Jordan realizó este deber'
        />
        <Marker
          coordinate={{ latitude: -0.16924030945500612, longitude: -78.47092322469005 }}
          title='UDLA'
          description='Aquí es donde Jordan dice que estudia'
        />
        <Marker
          coordinate={{ latitude: -0.16369876187658902, longitude: -78.47479262885352 }}
          title='Diego Centeno'
          description='Aquí es donde Diego Hizo la implementación'
        />
      </MapView>
    </>
  )
}

export default GeolocationScreen;