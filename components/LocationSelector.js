import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import MapPreview from './MapPreview';
import { COLORS } from '../constants/colors';
import ButtonLong from './buttonLong'
const LocationSelector = props => {
  const navigation = useNavigation();
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la localización para usar la aplicación',
        [{ text: 'Ok' }],
      )

      return false;
    }

    return true;
  }

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    })

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Location en proceso...</Text>
      </MapPreview>
      <ButtonLong
          text={"Obtener Location"} 
          handleSelected={handleGetLocation} 
          color={COLORS.primary}
      />
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius:10,
    elevation:2
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default LocationSelector;