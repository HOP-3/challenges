import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

// The FormInput component take 3 props
// 1. keyboardType
// 2. placeholder
// 3. mode = from the App.js state
const FormInput = ({keyboardType, placeholder, mode}) => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      // give style to the input with borderColor which change the color when the 'mode' state changes
      style={styles.input}
      // change placeholderTextColor when the 'mode' state changes
      keyboardType={keyboardType}
      value={value}
      placeholder={placeholder}
      onChangeText={e => setValue(e.target.value)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // must have width
    // must have height
    // must have margin
    // must have borderWidth
    // must have padding of 10
    // must border radius of 10    
  },
});

export default FormInput;
