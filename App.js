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
  const [mode, setMode] = useState(isDarkMode);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: mode ? 'black' : 'white'}}>
      <View style={styles.switch}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={() => setMode(!mode)}
          value={mode}
        />
      </View>
      <View style={styles.container}>
        <Text style={[styles.theme, {color: mode ? 'white' : 'black'}]}>
          {mode ? 'Dark theme' : 'Light theme'}
        </Text>
        <FormInput placeholder="e-mail" inputType="email-address" mode={mode} />
        <FormInput placeholder="enter text" inputType="default" mode={mode} />
        <FormInput placeholder="phone number" inputType="numeric" mode={mode} />
        <View style={styles.button}>
          <Button title="Submit" onPress={() => Alert.alert('You tapped')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
  },
  theme: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 10,
  },
  switch: {
    padding: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});

export default App;
