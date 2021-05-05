import { useState, useEffect } from "react";

import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import Splash from './src/screens/Splash';

LogBox.ignoreAllLogs();

function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);
  return (
    (splash ?
      <Splash />
      :
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )

  );
}

export default App;