import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const FormInput = ({inputType, placeholder, mode}) => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      style={[styles.input, {borderColor: mode ? 'white' : 'black'}]}
      placeholderTextColor={mode ? 'white' : '#E1E8EB'}
      keyboardType={inputType}
      value={value}
      placeholder={placeholder}
      onChangeText={e => setValue(e.target.value)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
});

export default FormInput;
