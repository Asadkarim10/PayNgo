import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Keyboard } from 'react-native';
import TextInput from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import { SocialIcon } from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <ScrollView>
                <Text style={{
                    fontSize: 26, color: 'black', marginLeft: '5%',
                    marginTop: windowHeight / 100 * 10, marginBottom: 40
                }}>
                    Login
            </Text>

                <TextInput
                    placeholder="Phone Number"
                    icon='call-outline'
                    label='Phone Number'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <TextInput
                    placeholder="Password"
                    icon='lock-open-outline'
                    label='Password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                    <Text style={{
                        fontSize: 14, color: '#3a55de', fontFamily: 'OpenSans-SemiBold',
                    }}>
                        Forgot your password?
                </Text>

                </TouchableOpacity>

                <View style={{ height: 20 }} />

                <ButtonLarge
                    title="Log In"
                    onPress={() => navigation.navigate('OTP')}
                />

            </ScrollView>
            {/* {!isKeyboardVisible ?
                <View style={{ marginTop: 15, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', bottom: 0, marginBottom: 20 }}>

                    <Text style={{
                        fontSize: 16, color: 'black',
                        marginTop: 10,
                    }}>
                        Don't have an account? </Text>

                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '5%' }} onPress={() => navigation.navigate('Register')}>

                        <Text style={{
                            fontSize: 16, color: '#3a55de',
                            marginTop: 10, textDecorationLine: 'underline'
                        }}>
                            SIGN UP
                        </Text>

                    </TouchableOpacity>

                </View>
                : null
            } */}
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    buttonStyleFb: {
        backgroundColor: '#1467E9',
        height: 50,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 10
    },
    buttonTitleStyleFb: {
        textAlign: "center",
        fontSize: 18,
        color: '#ffffff'
    },
    buttonStyleGoogle: {
        backgroundColor: '#F44848',
        height: 50,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 10
    },
    buttonTitleStyleGoogle: {
        textAlign: "center",
        fontSize: 18,
        color: '#ffffff'
    },
})