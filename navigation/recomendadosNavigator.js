import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyNavigator from './buyNavigator';
import HomeNavigator from './homeNavigator'

const Stack = createNativeStackNavigator();
const RecomendadosNavigator = () => (

    <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }}>
        <Stack.Screen name="Recommended" component={BuyNavigator} options={{title: "Pc Gamer"}} />
        <Stack.Screen name="VolverHome" component={HomeNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>

);

export default RecomendadosNavigator;