import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import SelectWallet from '../screens/SelectWallet'
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Appointment from '../screens/Appointment';
import Products from '../screens/Products';
import Profile from '../screens/Profile';
import BookAppointment from '../screens/BookAppointment';
import ThankYou from '../screens/ThankYou';
import Options from '../screens/Options';
import OTP from '../screens/OTP';
import PhotoFace from '../screens/PhotoFace';
import VerifyAccount from '../screens/VerifyAccount';
import PinCode from '../screens/PinCode';
import QRcode from '../screens/QRcode';
import Wallettype from '../screens/Wallettype'
import TransferFund from '../screens/TransferFund'
import AddCashScreen from '../screens/AddCashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator tabBarOptions={{ activeTintColor: '#3a55de' }}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='home' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Appointment" component={Appointment} options={{
                tabBarLabel: 'Services',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='wallet' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="AppointmentStck" component={AppointmentStck} options={{
                tabBarLabel: 'Loans',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='stats-chart-sharp' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Products" component={Products} options={{
                tabBarLabel: 'Savings',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='ios-server' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'History',
                tabBarIcon: ({ color, size }) => (

                    <Icon name='timer-outline' color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}
function AppointmentStck() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ title:'Pay&GO',headerTitleStyle:{fontSize:16,fontWeight:'300',alignSelf:'center',color:'white'},headerLeft:false }} />
            <Stack.Screen name="ThankYou" component={ThankYou} options={{ title:false }} />
        </Stack.Navigator>
    );
}
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'white'
        }}>
            <Stack.Screen name="Home" component={Home} options={{ title:'Pay&GO',headerTitleStyle:{fontSize:16,fontWeight:'300',alignSelf:'center',color:'white'},headerTransparent:true ,headerShown:true,headerLeft:false}} />
        

        </Stack.Navigator>
    );
}
export default function Navigation() {

    return (

        <Stack.Navigator initialRouteName='AddCashScreen'
            screenOptions={{
                headerTintColor: 'white'
            }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Options" component={Options} options={{ title: false, headerTransparent: true }} />
            <Stack.Screen name="Wallettype" component={Wallettype} options={{ title: false, headerTransparent: true }} />
            <Stack.Screen name="SelectWallet" component={SelectWallet} options={{title:false , headerTransparent: true}}  />
            <Stack.Screen name="AddCashScreen" component={AddCashScreen} options={{title:false , headerTransparent: true}}  />
            <Stack.Screen name="TransferFund" component={TransferFund} options={{title:false , headerTransparent: true}}  />
            <Stack.Screen name="Login" component={Login} options={{ title: false, headerTransparent: true }} />
            <Stack.Screen name="OTP" component={OTP} options={{ title: false, headerTransparent: true }} />
            <Stack.Screen name="Register" component={Register} options={{ title: false, headerTransparent: true }} />
            <Stack.Screen name="Home" component={Home} options={{ title:'Pay&GO',headerTitleStyle:{fontSize:16,fontWeight:'300',alignSelf:'center',color:'white'},headerTransparent:true ,headerShown:true,headerLeft:false}} />
            <Stack.Screen name="PhotoFace" component={PhotoFace} options={{ title:'',headerTransparent:true ,headerShown:true,headerTintColor:'#0150E3'}} />
            <Stack.Screen name="VerifyAccount" component={VerifyAccount} options={{ title:'',headerTransparent:true ,headerShown:true,headerTintColor:'#0150E3'}} />
            <Stack.Screen name="PinCode" component={PinCode} options={{ title:'',headerTransparent:true ,headerShown:true,headerTintColor:'white'}} />
            <Stack.Screen name="QRcode" component={QRcode} options={{ title:'',headerTransparent:true ,headerShown:true,headerTintColor:'#0150E3'}} />


        </Stack.Navigator>
    );
}