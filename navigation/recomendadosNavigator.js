import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyNavigator from './buyNavigator';
import OrdersNavigator from './ordersNavigation'

const Stack = createNativeStackNavigator();
const RecomendadosNavigator = () => (

    <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }}>
        <Stack.Screen name="Recommended" component={BuyNavigator} options={{title: "Pc Gamer"}} />
        
    </Stack.Navigator>

);

export default RecomendadosNavigator;