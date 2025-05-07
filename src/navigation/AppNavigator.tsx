import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClienteHome from '../screens/cliente/ClienteHome';
import MeseroHome from '../screens/mesero/MeseroHome';
import LoginScreen from '../screens/LoginScreen';
import ReservarMesa from '../screens/cliente/ReservarMesa';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ClienteHome" component={ClienteHome} />
        <Stack.Screen name="MeseroHome" component={MeseroHome} />
        <Stack.Screen name="ReservarMesa" component={ReservarMesa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}