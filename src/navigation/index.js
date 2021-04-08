import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

export default function Navigation() {

    return (

        <Stack.Navigator initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="SplashScreen" component={SplashScreen} />

        </Stack.Navigator>
    );
}