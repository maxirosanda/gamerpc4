import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalle from '../screens/misPcs/detalle'
import MisPcs from '../screens/misPcs/mispcs';
import NewMiPc from '../screens/misPcs/newMiPc';

const Stack = createNativeStackNavigator()

const MisPcsNavigator = () => (

    <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }} >
        <Stack.Screen name="Mispcs" component={MisPcs} options={{title: "Mis pcs" ,headerShown:false}}  />
        <Stack.Screen name="Detalle" component={Detalle} options={{title: "Detalles" }}  />
        <Stack.Screen name="New Pc" component={NewMiPc} options={{title: "Detalles" }}  />
    </Stack.Navigator>  

);

export default MisPcsNavigator