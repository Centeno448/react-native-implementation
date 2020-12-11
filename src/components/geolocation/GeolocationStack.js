import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GeolocationScreen from './Geolocation'

const Stack = createStackNavigator()

const CameraStack =  () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#20252c',
                    shadowOpacity: '#20252c'
                },
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name="Geolocation" component={GeolocationScreen} />
        </Stack.Navigator>
    )
}

export default CameraStack