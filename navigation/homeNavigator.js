import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from './drawerNavigator';
import RecomendadosNavigator from './recomendadosNavigator';
import GamesNavigator from './gamesNavigator'
import ProgramsNavigator from './programsNavigator'
import BuildPcNavigator from './builtPcNavigator'

const Stack = createNativeStackNavigator()

const HomeNavigator = () => (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homeHome" component={DrawerNavigator}/>
        <Stack.Screen name="RecommendedHome" component={RecomendadosNavigator} />
        <Stack.Screen name="GamesHome" component={GamesNavigator} />
        <Stack.Screen name="ProgramsHome" component={ProgramsNavigator} />
        <Stack.Screen name="BuildPcHome" component={BuildPcNavigator} />
    </Stack.Navigator>

);

export default  HomeNavigator