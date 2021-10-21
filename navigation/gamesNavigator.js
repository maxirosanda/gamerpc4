import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game from '../screens/principales/game'
import ListPcs from '../screens/principales/listPcs'

const Stack = createNativeStackNavigator()

const GamesNavigator = () => (

    <Stack.Navigator  screenOptions={{headerStyle: {backgroundColor:'#000000'},headerTintColor:'#ffffff' }}>
       <Stack.Screen name="Games" component={Game} options={{title: "Seleccion por juegos"}}  />
       <Stack.Screen name="ListPcs" component={ListPcs} options={{title: "Pcs Compatibles"}}  />
    </Stack.Navigator>

);

export default  GamesNavigator