import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClienteHome from '../screens/cliente/ClienteHome';
import MeseroHome from '../screens/mesero/MeseroHome';
import LoginScreen from '../screens/LoginScreen';
import ReservarMesa from '../screens/cliente/ReservarMesa';
import HacerPedido from '../screens/cliente/HacerPedido';
import HacerPedidoMesero from '../screens/mesero/HacerPedidoMesero';
import VerTodo from '../screens/mesero/VerTodo';
import EstadisticasConsumo from '../screens/cliente/EstadisticasConsumo';
import FormasPago from '../screens/cliente/FormasPago';
import Menu from '../screens/cliente/Menu';
//import OrderConfirmation from '../screens/cliente/OrdenConfirmation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ClienteHome" component={ClienteHome} />
        <Stack.Screen name="MeseroHome" component={MeseroHome} />
        <Stack.Screen name="ReservarMesa" component={ReservarMesa} />
        <Stack.Screen name="HacerPedido" component={HacerPedido} />
        <Stack.Screen name="HacerPedidoMesero" component={HacerPedidoMesero}/>
        <Stack.Screen name="VerTodo" component={VerTodo}/>
        <Stack.Screen name="EstadisticasConsumo" component={EstadisticasConsumo}/>
        <Stack.Screen name="FormasPago" component={FormasPago}/>
        <Stack.Screen name="Menu" component={Menu}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import ClienteHome from '../screens/cliente/ClienteHome';
import MeseroHome from '../screens/mesero/MeseroHome';
import LoginScreen from '../screens/LoginScreen';
import ReservarMesa from '../screens/cliente/ReservarMesa';
import HacerPedido from '../screens/cliente/HacerPedido';
import HacerPedidoMesero from '../screens/mesero/HacerPedidoMesero';
import VerTodo from '../screens/mesero/VerTodo';
import EstadisticasConsumo from '../screens/cliente/EstadisticasConsumo';
import FormasPago from '../screens/cliente/FormasPago';
import Menu from '../screens/cliente/Menu';
import OrderConfirmation from '../screens/cliente/OrdenConfirmation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ClienteHome"
          component={ClienteHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MeseroHome"
          component={MeseroHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReservarMesa"
          component={ReservarMesa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HacerPedido"
          component={HacerPedido}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HacerPedidoMesero"
          component={HacerPedidoMesero}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerTodo"
          component={VerTodo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EstadisticasConsumo"
          component={EstadisticasConsumo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormasPago"
          component={FormasPago}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/