import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch(action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    touched: false,
  });

  const { onInputChange, id,label } = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [onInputChange, id, inputState])

  const handleChangeText = text => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (props.required && text.trim().length === 0) isValid = false;
    if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (props.minLength && text.length < props.minLength) isValid = false;

    inputDispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: isValid,
    });
  }

  const handleBlur = () => inputDispatch({ type: INPUT_BLUR });

  return (
    <View style={styles.formControl}>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        placeholder={label}
      />
       <View style={styles.error}>
      {!inputState.isValid && inputState.touched && (
       
            <Text style={styles.errorText}>{props.errorText}</Text>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
    height:80
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius:5,
    marginVertical:5
    
  },
  error:{
    height:20,
    marginBottom:10
  },
  errorText: {
  
    color: '#cc7755'
  }
});

export default Input;