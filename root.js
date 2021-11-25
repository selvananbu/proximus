import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceDetail from './src/screens/details/index';
import Home from './src/screens/home/index';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeviceDetail" component={DeviceDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}