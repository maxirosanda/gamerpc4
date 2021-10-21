import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/colors';

const AuthScreenWrapper = ({ children, title, message, buttonText, buttonPath }) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {children}
   
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginHorizontal:15,
    marginVertical:40
  },
  title: {
    fontSize: 24,
    marginVertical: 55,
    textAlign: 'center',
    
  },

  prompt: {
    alignItems: 'center',
    marginTop:14
  },
  promptMessage: {
    fontSize: 16,
    color: '#FB6D01',
  },
  promptButton: {
    fontSize: 16,
    color:"#FB6D01" ,
    fontWeight:"800"
  },
});

export default AuthScreenWrapper;