import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Programs from "../screens/principales/programs"
import ListPcs from '../screens/principales/listPcs'


const Stack = createNativeStackNavigator();
const ProgramsNavigator = () => (

    <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }}>
        <Stack.Screen name="Programs" component={Programs} options={{title: "Seleccion por programa"}} />
        <Stack.Screen name="ListPcs" component={ListPcs} options={{title: "Pcs Compatibles"}}  />
    </Stack.Navigator>

);

export default  ProgramsNavigator