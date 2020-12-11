import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'cryptoTracker/src/components/coins/CoinsStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoritesStack from 'cryptoTracker/src/components/favorites/FavoritesStack'
import CameraStack from 'cryptoTracker/src/components/camera/CameraStack'
import GeolocationStack from 'cryptoTracker/src/components/geolocation/GeolocationStack'

const Tabs = createBottomTabNavigator()

const App: () => React$Node = () => {
  console.log('APP')
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: '#20252c'
          }
        }}
      >
        <Tabs.Screen
          name='Camera'
          component={CameraStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/camera.png')}
              />
            )
          }}
        />
        <Tabs.Screen
          name='Coins'
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/bank.png')}
              />
            )
          }}
        />
        <Tabs.Screen
          name='Favorites'
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/star.png')}
              />
            )
          }}
        />
        <Tabs.Screen
          name='Geolocation'
          component={GeolocationStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/location.png')}
              />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
