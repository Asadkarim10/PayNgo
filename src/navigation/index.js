import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";

import Login from '../screens/Login';
import Register from '../screens/Register';
import NewsFeed from '../screens/NewsFeed';
import Appointment from '../screens/Appointment';
import Products from '../screens/Products';
import Profile from '../screens/Profile';
import BookAppointment from '../screens/BookAppointment';
import ThankYou from '../screens/ThankYou';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator tabBarOptions={{ activeTintColor: '#b3a14b' }}>
            <Tab.Screen name="NewsFeed" component={NewsFeed} options={{
                tabBarLabel: 'News',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='newspaper-sharp' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Appointment" component={Appointment} options={{
                tabBarLabel: 'Appointment',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='calendar' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="AppointmentStck" component={AppointmentStck} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='restaurant' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Products" component={Products} options={{
                tabBarLabel: 'Products',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='cut' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='ios-person-circle-sharp' color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}
function AppointmentStck() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ title:'Book an appoinment',headerTitleStyle:{fontSize:16,fontWeight:'300',alignSelf:'center'},headerLeft:false }} />
            <Stack.Screen name="ThankYou" component={ThankYou} options={{ title:false }} />
        

        </Stack.Navigator>
    );
}
export default function Navigation() {

    return (

        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerTintColor: 'white'
            }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ title: false, headerTransparent: true }} />
            <Stack.Screen name="Register" component={Register} options={{ title: false, headerTransparent: true }} />

        </Stack.Navigator>
    );
}