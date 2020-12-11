import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CameraScreen from './Camera'

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
            <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
    )
}

export default CameraStack