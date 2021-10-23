import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AuthScreenWrapper = ({ children }) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
      <View style={styles.container}>
        {children}
   
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal:15,
    paddingVertical:120
  },
  title: {
    fontSize: 24,
    marginVertical: 55,
    textAlign: 'center',
    
  },


});

export default AuthScreenWrapper;