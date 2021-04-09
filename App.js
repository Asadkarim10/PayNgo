import 'react-native-gesture-handler';
import * as React from 'react';
import {LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;