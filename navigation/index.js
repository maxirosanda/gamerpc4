import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from './homeNavigator';
import AuthNavigator from './AuthNavigator'

const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer>

      {userId
        ? <HomeNavigator/>
      : <AuthNavigator/> }
    </NavigationContainer>
  );
};

export default MainNavigator;