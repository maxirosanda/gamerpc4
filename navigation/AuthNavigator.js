import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/user/LoginScreen';
import RegisterScreen from '../screens/user/RegisterScreen';
import Inicio from '../screens/user/inicio';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Inicio"  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }}>
    <Stack.Screen name="Inicio" options={{ headerShown: false }} component={Inicio} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;