import React, {useState} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Switch,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import FormInput from './src/components/FormInput';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isEnabled, setIsEnabled] = useState(false);
  // write a state called 'mode', the initial state is 'isDarkMode'

  return (
    // Give style in SafeAreaView that changes the backgroundColor when 'mode' state changes
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.switch}>
        {/* Add Switch in this part which would change the theme color */}
      </View>
      <View style={styles.container}>
        {/* Give style in Text that changes the font color */}
        <Text style={styles.themeText}>
          {/* Change the text when the 'mode' state changes */}
        </Text>
        {/* FormInput component with keyboardType="email-address" and placeholder, to change theme must implement 'mode' state*/}
        {/* FormInput component with keyboardType="default" and placeholder, to change theme must implement 'mode' state*/}
        {/* FormInput component with keyboardType="numeric" and placeholder, to change theme must implement 'mode' state*/}
        <View style={styles.button}>
          {/* Add Button in this part with alert function */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  switch: {
    padding: 20,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
  },
  themeText: {
    // font's size must be 25
    // place the text in center of the screen
    // give a padding (optional)
  },
  button: {
    // give a width to button
  },
});

export default App;
