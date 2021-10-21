import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuildPc  from '../screens/principales/buildpc';



const Stack = createNativeStackNavigator();
const BuildPcNavigator = () => (

    <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }}>
        <Stack.Screen name="BuildPc" component={BuildPc} options={{title: "Armar Pc Manualmente"}} />
    </Stack.Navigator>

);

export default BuildPcNavigator